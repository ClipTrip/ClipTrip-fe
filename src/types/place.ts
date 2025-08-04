import type { CATEGORY } from '@/constants/category';
import type { ApiSuccessResponse } from '@/types/api';

export interface PlaceList {
  placeId: number;
  placeName: string;
  roadAddress: string;
  phone?: string;
  type: CategoryType;
  longitude: number;
  latitude: number;
  placeOrder: number;
}

export type CategoryType = (typeof CATEGORY)[keyof typeof CATEGORY];

export interface KeywordPlacesRequest {
  query: string;
  x: string;
  y: string;
  radius: string;
}

export interface KeywordPlacesResponse extends ApiSuccessResponse {
  data: PlaceList[];
}
