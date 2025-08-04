import type { ApiSuccessResponse } from '@/types/api';
import type { PlaceList } from '@/types/place';

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
  phoneNumber: string;
  type: 'LARGE_MART';
}

export interface AddBookmarkProps {
  bookmarkId: number;
  data: AddBookmarkRequest;
}
