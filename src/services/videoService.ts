import { instance } from '@/lib/axios';
import type { VideosRequest } from '@/types/video';

export const videoApi = {
  youtube: async (data: VideosRequest) => {
    const res = await instance.post('/api/v1/videos', data, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqamprMDYwNUBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwidHlwZSI6IkFjY2VzcyIsImV4cCI6MTc1NDAzODU3OX0.EJA3cxfNpPrKdm1cTRM20p2uirOKgvnxpmDYx78KOvQ',
      },
    });

    return res.data;
  },
};
