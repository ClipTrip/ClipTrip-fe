import { bookmarkService } from '@/services/bookmarkService';
import type { ApiFailResponse, ApiSuccessResponse } from '@/types/api';
import type {
  BookmarkDetailResponse,
  BookmarkResponse,
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
    queryKey: ['bookmarkDetail', id],
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
