import { instance } from '@/lib/axios';
import type {
  CategoryPlacesRequest,
  KeywordPlacesRequest,
  LuggagePlacesRequest,
  LuggagePlacesResponse,
  PlaceDetailKakaoIdRequest,
  PlaceDetailResponse,
  SearchPlacesResponse,
} from '@/types/place';

export const placeApi = {
  getKeywordPlaces: async (params: KeywordPlacesRequest) => {
    const res = await instance.get<SearchPlacesResponse>(
      '/api/v1/places/keyword',
      {
        params,
      }
    );

    return res.data;
  },

  getCategoryPlaces: async (params: CategoryPlacesRequest) => {
    const res = await instance.get<SearchPlacesResponse>(
      '/api/v1/places/category',
      {
        params,
      }
    );

    return res.data;
  },

  getLuggagePlaces: async (params: LuggagePlacesRequest) => {
    const res = await instance.get<LuggagePlacesResponse>(
      '/api/v1/places/luggage-storages',
      {
        params,
      }
    );

    return res.data;
  },

  getPlaceDetail: async (placeId: string) => {
    const res = await instance.get<PlaceDetailResponse>(
      `/api/v1/places/${placeId}`
    );

    return res.data;
  },

  postPlaceDetailKakaoId: async (params: PlaceDetailKakaoIdRequest) => {
    const res = await instance.post<PlaceDetailResponse>(
      `/api/v1/places/by-external-id`,
      params
    );

    return res.data;
  },
};
