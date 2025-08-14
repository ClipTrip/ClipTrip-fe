import { placeApi } from '@/services/placeService';
import type { ApiFailResponse } from '@/types/api';
import type {
  CategoryCodeType,
  CategoryPlacesRequest,
  KeywordPlacesRequest,
  LuggagePlacesRequest,
  LuggagePlacesResponse,
  PlaceDetailKakaoIdRequest,
  PlaceDetailResponse,
  SearchPlacesResponse,
} from '@/types/place';
import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useSearchKeywordPlaces = (params: KeywordPlacesRequest) => {
  return useQuery<SearchPlacesResponse, ApiFailResponse>({
    queryFn: () => placeApi.getKeywordPlaces(params),
    queryKey: [
      'places',
      params.query,
      params.longitude,
      params.latitude,
      params.radius,
    ],
    enabled:
      !!params.query
      && !!params.longitude
      && !!params.latitude
      && !!params.radius,
  });
};

type InputParams = Omit<CategoryPlacesRequest, 'categoryCode'> & {
  categoryCode: string;
};

export const useSearchCategoryPlaces = ({
  categoryCode,
  longitude,
  latitude,
  radius,
}: InputParams) => {
  const codes = categoryCode
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);

  const queries = useQueries({
    queries: codes.map((code) => ({
      queryKey: ['places', code, longitude, latitude, radius],
      queryFn: () =>
        placeApi.getCategoryPlaces({
          categoryCode: code as CategoryCodeType,
          longitude,
          latitude,
          radius,
        }),
      enabled: !!longitude && !!latitude && !!radius && code !== 'LS1',
    })),
  });

  const isPending = queries.some((q) => q.isPending);
  const isError = queries.some((q) => q.isError);
  const data = queries.flatMap((q) => q.data?.data ?? []);

  return { data, isPending, isError };
};

export const useSearchLuggagePlaces = (params: LuggagePlacesRequest) => {
  return useQuery<LuggagePlacesResponse, ApiFailResponse>({
    queryFn: () => placeApi.getLuggagePlaces(params),
    queryKey: ['places', 'luggage', params.latitude, params.longitude],
    enabled: !!params.latitude && !!params.longitude,
  });
};

export const useGetPlaceDetailPlaceId = (placeId?: string) => {
  return useQuery<PlaceDetailResponse, ApiFailResponse>({
    queryFn: () => placeApi.getPlaceDetail(placeId!),
    queryKey: ['places', placeId],
    enabled: !!placeId,
  });
};

export const useGetPlaceDetailKakaoId = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<
    PlaceDetailResponse,
    ApiFailResponse,
    PlaceDetailKakaoIdRequest
  >({
    mutationFn: (params) => placeApi.postPlaceDetailKakaoId(params),
    onSuccess: (res) => {
      queryClient.setQueryData(['places', res.data.placeId], res);
      navigate(`/places/${res.data.placeId}`);
    },
  });
};
