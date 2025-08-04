import { instance } from '@/lib/axios';
import type {
  CategoryPlacesRequest,
  KeywordPlacesRequest,
  LuggagePlacesRequest,
} from '@/types/place';

export const placeApi = {
  getKeywordPlaces: async (params: KeywordPlacesRequest) => {
    const res = await instance.get('/api/v1/places/keyword', {
      params,
    });

    return res.data;
  },

  getCategoryPlaces: async (params: CategoryPlacesRequest) => {
    const res = await instance.get('/api/v1/places/category', {
      params,
    });

    return res.data;
  },

  getLuggagePlaces: async (params: LuggagePlacesRequest) => {
    const res = await instance.get('/api/v1/places/luggage-storages', {
      params,
    });

    return res.data;
  },
};
