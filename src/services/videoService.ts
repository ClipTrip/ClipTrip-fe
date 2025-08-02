import { instance } from '@/lib/axios';
import type { VideosRequest } from '@/types/video';

export const videoApi = {
  youtube: async (data: VideosRequest) => {
    const res = await instance.post('/api/v1/videos', data);

    return res.data;
  },
};
