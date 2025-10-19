import { videoApi } from '@/services/videoService';
import type { ApiFailResponse } from '@/types/api';
import type { VideosRequest, VideosResponse } from '@/types/video';
import { getOrCreateIdempotencyKey } from '@/utils/idempotencyKey';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import axios, { CanceledError } from 'axios';
import { toast } from 'sonner';

function isCanceled(err: unknown) {
  return (
    axios.isCancel?.(err)
    || err instanceof CanceledError
    || (err as Error)?.name === 'AbortError'
  );
}

function isConflict409(error: unknown) {
  return axios.isAxiosError(error) && error.response?.status === 409;
}

export const useVideos = () => {
  return useMutation<
    AxiosResponse<VideosResponse>,
    ApiFailResponse,
    VideosRequest
  >({
    mutationFn: (data) => {
      const idempotencyKey = getOrCreateIdempotencyKey(data);

      return videoApi.youtube(data, idempotencyKey);
    },
    onError: (error) => {
      if (error instanceof Error && error.name === 'CanceledError') return;
      toast.error(error.message);
    },

    retry: (_failureCount, error) => {
      if (isCanceled(error)) return false;
      return isConflict409(error);
    },

    retryDelay: () => 1000,
  });
};
