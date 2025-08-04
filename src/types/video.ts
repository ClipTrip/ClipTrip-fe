import type { ApiSuccessResponse } from '@/types/api';
import type { PlaceList } from '@/types/place';

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
      placeList: PlaceList[];
    };
  };
}
