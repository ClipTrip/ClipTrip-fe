import { instance } from '@/lib/axios';
import {
  type BookmarkDetailResponse,
  type BookmarkResponse,
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
};
