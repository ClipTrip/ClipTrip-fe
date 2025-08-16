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
      placeOrder: number;
      kakaoPlaceId: string;
    }[];
  };
}

export interface PatchScheduleRequest {
  scheduleName?: string;
  description?: string;
  placeInfoRequests?: {
    placeOrder: number;
    placeInfo: PatchSchedulePlace;
  }[];
}

export interface PatchSchedulePlace {
  latitude: number;
  longitude: number;
  roadAddress: string;
  placeName: string;
  phone: string;
  type: CategoryType;
  kakaoPlaceId: string;
}

export interface PatchScheduleProps {
  data: PatchScheduleRequest;
  scheduleId: number;
}

export interface PatchScheduleResponse extends ApiSuccessResponse {
  data: number;
}
