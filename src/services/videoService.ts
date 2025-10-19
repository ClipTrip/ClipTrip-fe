import { instance } from '@/lib/axios';
import type { VideosRequest } from '@/types/video';

export const videoApi = {
  youtube: async (data: VideosRequest, idempotencyKey: string) => {
    const res = await instance.post(
      '/api/v1/videos',
      { youtubeUrl: data.youtubeUrl },
      {
        headers: {
          'Idempotency-Key': idempotencyKey,
        },
        signal: data.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return res;
  },
};
