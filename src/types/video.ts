import type { ApiSuccessResponse } from '@/types/api';
import type { CategoryType } from '@/types/place';
import type { LanguageName } from '@/types/type';

export interface VideosRequest {
  youtubeUrl: string;
  signal: AbortSignal;
}

export interface VideosResponse extends ApiSuccessResponse {
  data: {
    videoResponse: {
      videoId: number;
      url: string;
      thumbnailUrl: string;
      summary: string;
    };
    scheduleInfoResponse: {
      id: number;
      name: string;
      description: string;
      placeList: {
        placeId: number;
        placeName: string;
        roadAddress: string;
        phone: string;
        type: CategoryType;
        longitude: number;
        latitude: number;
        translatedPlaceName: string | null;
        translatedRoadAddress: string | null;
        language: LanguageName;
        kakaoPlaceId: string;
        bookmarkedIdList: number[];
      }[];
    };
  };
}
