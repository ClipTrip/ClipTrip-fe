import { instance } from '@/lib/axios';
import type { KeywordPlacesRequest } from '@/types/place';

export const placeApi = {
  getKeywordPlaces: async (params: KeywordPlacesRequest) => {
    const res = await instance.get('/api/v1/places/keyword', {
      params,
    });

    return res.data;
  },
};
