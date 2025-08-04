import { bookmarkService } from '@/services/bookmarkService';
import type { ApiFailResponse, ApiSuccessResponse } from '@/types/api';
import type {
  AddBookmarkProps,
  AddBookmarkResponse,
  BookmarkDetailResponse,
  BookmarkResponse,
  CreateBookmarkRequest,
  CreateBookmarkResponse,
} from '@/types/bookmarks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetBookmark = () => {
  return useQuery<BookmarkResponse, ApiFailResponse>({
    queryFn: bookmarkService.getBookmarks,
    queryKey: ['bookmarks'],
  });
};

export const useGetBookmarkDetail = (id?: string) => {
  return useQuery<BookmarkDetailResponse, ApiFailResponse>({
    queryFn: () => bookmarkService.getBookmarkDetail(id!),
    queryKey: ['bookmarks', id],
    enabled: !!id,
  });
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation<ApiSuccessResponse, ApiFailResponse, number>({
    mutationFn: (data) => bookmarkService.deleteBookmark(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      });
      toast.success('북마크가 삭제되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useCreateBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CreateBookmarkResponse,
    ApiFailResponse,
    CreateBookmarkRequest
  >({
    mutationFn: (data) => bookmarkService.createBookmark(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      });
      toast.success('북마크가 생성되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useAddBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation<
    AddBookmarkResponse,
    ApiFailResponse,
    AddBookmarkProps,
    AddBookmarkProps
  >({
    mutationFn: ({ bookmarkId, data }) =>
      bookmarkService.addBookmark({ bookmarkId: bookmarkId, data }),
    onSuccess: (_, __, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks', variables.bookmarkId],
      });
      toast.success('새로운 장소가 추가 되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
