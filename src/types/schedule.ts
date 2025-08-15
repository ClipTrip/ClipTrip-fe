import type { ApiSuccessResponse } from '@/types/api';
import type { CategoryType } from '@/types/place';

export interface GetSchedulesResponse extends ApiSuccessResponse {
  data: {
    scheduleId: number;
    scheduleName: string;
    description: string;
  }[];
}

export interface DeleteScheduleResponse extends ApiSuccessResponse {
  data: number;
}

export interface GetScheduleDetailResponse extends ApiSuccessResponse {
  data: {
    scheduleId: number;
    scheduleName: string;
    description: string;
    placeList: [
      {
        placeId: number;
        placeName: string;
        roadAddress: string;
        phone: string;
        type: CategoryType;
        longitude: number;
        latitude: number;
        placeOrder: number;
        kakaoPlaceId: string;
      },
    ];
  };
}
