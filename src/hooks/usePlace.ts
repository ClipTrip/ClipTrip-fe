import { placeApi } from '@/services/placeService';
import type { ApiFailResponse } from '@/types/api';
import type {
  CategoryCodeType,
  CategoryPlacesRequest,
  KeywordPlacesRequest,
  KeywordPlacesResponse,
  LuggagePlacesRequest,
  LuggagePlacesResponse,
} from '@/types/place';
import { useQueries, useQuery } from '@tanstack/react-query';

export const useSearchKeywordPlaces = (params: KeywordPlacesRequest) => {
  return useQuery<KeywordPlacesResponse, ApiFailResponse>({
    queryFn: () => placeApi.getKeywordPlaces(params),
    queryKey: ['places', params.query, params.x, params.y, params.radius],
    enabled: !!params.query && !!params.x && !!params.y && !!params.radius,
  });
};

type InputParams = Omit<CategoryPlacesRequest, 'categoryCode'> & {
  categoryCode: string;
};

export const useSearchCategoryPlaces = ({
  categoryCode,
  x,
  y,
  radius,
}: InputParams) => {
  const codes = categoryCode
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);

  const queries = useQueries({
    queries: codes.map((code) => ({
      queryKey: ['places', code, x, y, radius],
      queryFn: () =>
        placeApi.getCategoryPlaces({
          categoryCode: code as CategoryCodeType,
          x,
          y,
          radius,
        }),
      enabled: !!x && !!y && !!radius && code !== 'LS1',
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
