import type { ApiSuccessResponse } from '@/types/api';
import type { CategoryType } from '@/types/place';

export interface VideosRequest {
  youtubeUrl: string;
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
      scheduleId: number;
      scheduleName: string;
      description: string;
      placeList: {
        placeId: number;
        placeName: string;
        roadAddress: string;
        phone: string;
        type: CategoryType;
        longitude: number;
        latitude: number;
        placeOrder: number;
        kakaoPlaceId: string;
      }[];
    };
  };
}
