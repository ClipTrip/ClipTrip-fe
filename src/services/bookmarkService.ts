import { instance } from '@/lib/axios';
import {
  type AddBookmarkProps,
  type BookmarkDetailResponse,
  type BookmarkResponse,
  type CreateBookmarkRequest,
  type CreateBookmarkResponse,
  type PatchBookmarkProps,
} from '@/types/bookmarks';

export const bookmarkService = {
  getBookmarks: async () => {
    const res = await instance.get<BookmarkResponse>('/api/v1/bookmarks');
    return res.data;
  },

  getBookmarkDetail: async (bookmarkId: string) => {
    const res = await instance.get<BookmarkDetailResponse>(
      `/api/v1/bookmarks/${bookmarkId}`
    );
    return res.data;
  },

  deleteBookmark: async (bookmarkId: number) => {
    const res = await instance.delete(`/api/v1/bookmarks/${bookmarkId}`);
    return res.data;
  },

  createBookmark: async (data: CreateBookmarkRequest) => {
    const res = await instance.post<CreateBookmarkResponse>(
      '/api/v1/bookmarks',
      data
    );
    return res.data;
  },

  addBookmark: async ({ bookmarkId, data }: AddBookmarkProps) => {
    const res = await instance.post<CreateBookmarkResponse>(
      `/api/v1/bookmarks/${bookmarkId}`,
      data
    );
    return res.data;
  },

  patchBookmark: async ({ bookmarkId, data }: PatchBookmarkProps) => {
    const res = await instance.patch<CreateBookmarkResponse>(
      `/api/v1/bookmarks/${bookmarkId}`,
      data
    );
    return res.data;
  },
};
