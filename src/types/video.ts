import type { ApiSuccessResponse } from "@/types/api";

export interface VideosRequest {
  youtubeUrl: string;
}

export interface PlaceList {
  placeId: number;
  placeName: string;
  roadAddress: string;
  phone: string;
  type: string;
  longitude: number;
  latitude: number;
  placeOrder: number;
}

export interface VideosResponse extends ApiSuccessResponse {
  data: {
    videoResponse: {
      videoId: number;
      url: string;
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
