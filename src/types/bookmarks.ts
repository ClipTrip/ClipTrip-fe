import type { ApiSuccessResponse } from '@/types/api';
import type { PlaceList } from '@/types/video';

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
