import type { ACCESSIBILITY } from '@/constants/accessibility';
import type { CATEGORY, CATEGORY_CODE } from '@/constants/category';
import type { ApiSuccessResponse } from '@/types/api';
import type { LanguageName } from '@/types/type';

export interface PlaceList {
  placeId: number;
  placeName: string;
  roadAddress: string;
  phone: string;
  type: CategoryType;
  longitude: number;
  latitude: number;
  placeOrder: number;
  kakaoPlaceId: string;
  bookmarkedIdList: number[];
}

export interface SearchResponsePlace {
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
}

export type CategoryType = (typeof CATEGORY)[keyof typeof CATEGORY];
export type CategoryCodeType =
  (typeof CATEGORY_CODE)[keyof typeof CATEGORY_CODE];
export type AccessibilityType =
  (typeof ACCESSIBILITY)[keyof typeof ACCESSIBILITY];

export interface KeywordPlacesRequest {
  query: string;
  longitude: string;
  latitude: string;
  radius: string;
}

export interface SearchPlacesResponse extends ApiSuccessResponse {
  data: SearchResponsePlace[];
}

export interface CategoryPlacesRequest {
  categoryCode: CategoryCodeType;
  longitude: string;
  latitude: string;
  radius: string;
}

export interface LuggagePlacesRequest {
  latitude: string;
  longitude: string;
}

export interface LuggagePlacesResponse extends ApiSuccessResponse {
  data: LuggagePlaces[];
}

export type LuggagePlaces = {
  placeId: number;
} & Omit<SearchResponsePlace, 'kakaoPlaceId'>;

export interface PlaceDetailResponse extends ApiSuccessResponse {
  data: {
    placeId: number;
    placeName: string;
    roadAddress: string;
    phone: string;
    type: CategoryType;
    longitude: number;
    latitude: number;
    accessibilityFeatures: AccessibilityType[];
    imageUrl: string;
    bookmarkedIdList: number[];
    kakaoPlaceId: string;
  };
}

export interface PlaceDetailKakaoIdRequest {
  latitude: number;
  longitude: number;
  roadAddress: string;
  placeName: string;
  phone: string;
  type: CategoryType;
  kakaoPlaceId: string;
}
