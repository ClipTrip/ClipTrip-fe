import { placeApi } from '@/services/placeService';
import type { ApiFailResponse } from '@/types/api';
import type {
  KeywordPlacesRequest,
  KeywordPlacesResponse,
} from '@/types/place';
import { useQuery } from '@tanstack/react-query';

export const useSearchKeywordPlaces = (params: KeywordPlacesRequest) => {
  return useQuery<KeywordPlacesResponse, ApiFailResponse>({
    queryFn: () => placeApi.getKeywordPlaces(params),
    queryKey: ['bookmarks', params.query, params.x, params.y, params.radius],
    enabled: !!params.query && !!params.x && !!params.y && !!params.radius,
  });
};
