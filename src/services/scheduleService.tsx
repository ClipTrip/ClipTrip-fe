import { instance } from '@/lib/axios';
import type { GetSchedulesResponse } from '@/types/schedule';

export const scheduleApi = {
  getSchedules: async () => {
    const res = await instance.get<GetSchedulesResponse>('/api/v1/schedules');

    return res.data;
  },
};
