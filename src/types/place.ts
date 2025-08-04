import type { CATEGORY, CATEGORY_CODE } from '@/constants/category';
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
export type CategoryCodeType =
  (typeof CATEGORY_CODE)[keyof typeof CATEGORY_CODE];

export interface KeywordPlacesRequest {
  query: string;
  x: string;
  y: string;
  radius: string;
}

export interface KeywordPlacesResponse extends ApiSuccessResponse {
  data: Omit<PlaceList, 'placeId' | 'placeOrder'>[];
}

export interface CategoryPlacesRequest {
  categoryCode: CategoryCodeType;
  x: string;
  y: string;
  radius: string;
}

export interface CategoryPlacesResponse extends ApiSuccessResponse {
  data: Omit<PlaceList, 'placeId' | 'placeOrder'>[];
}

export interface LuggagePlacesRequest {
  latitude: string;
  longitude: string;
}

export interface LuggagePlacesResponse extends ApiSuccessResponse {
  data: Omit<PlaceList, 'type' | 'placeOrder' | 'phone'>[];
}
