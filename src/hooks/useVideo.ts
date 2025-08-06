import { videoApi } from '@/services/videoService';
import type { ApiFailResponse } from '@/types/api';
import type { VideosRequest, VideosResponse } from '@/types/video';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useVideos = () => {
  return useMutation<VideosResponse, ApiFailResponse, VideosRequest>({
    mutationFn: (data) => videoApi.youtube(data),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
