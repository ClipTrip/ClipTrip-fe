import type { ApiSuccessResponse } from '@/types/api';
import type { CategoryType, PlaceList } from '@/types/place';

export interface BookmarkResponse extends ApiSuccessResponse {
  data: {
    bookmarkId: number;
    name: string;
    description: string;
  }[];
}

export interface BookmarkDetailResponse extends ApiSuccessResponse {
  data: {
    id: number;
    name: string;
    description: string;
    placeList: PlaceList[];
  };
}

export interface CreateBookmarkRequest {
  bookmarkName: string;
  description: string;
}

export interface CreateBookmarkResponse extends ApiSuccessResponse {
  data: number;
}

export type AddBookmarkResponse = CreateBookmarkResponse;

export interface AddBookmarkRequest {
  latitude: number;
  longitude: number;
  roadAddress: string;
  placeName: string;
  phone?: string;
  type: CategoryType;
  kakaoPlaceId?: string;
}

export interface AddBookmarkProps {
  bookmarkId: number;
  data: AddBookmarkRequest;
}

export interface PatchBookmarkRequest extends Partial<CreateBookmarkRequest> {
  placeInfoRequests?: AddBookmarkRequest[];
}

export interface PatchBookmarkProps {
  bookmarkId: number;
  data: PatchBookmarkRequest;
}

export type PatchBookmarkResponse = CreateBookmarkResponse;

export interface DeleteBookmarkRequest {
  bookmarkId: number;
  placeId: number;
}

export type DeleteBookmarkResponse = CreateBookmarkResponse;
