import { instance } from '@/lib/axios';
import type {
  DeleteScheduleResponse,
  GetScheduleDetailResponse,
  GetSchedulesResponse,
} from '@/types/schedule';

export const scheduleApi = {
  getSchedules: async () => {
    const res = await instance.get<GetSchedulesResponse>('/api/v1/schedules');

    return res.data;
  },

  getScheduleDetail: async (scheduleId: number) => {
    const res = await instance.get<GetScheduleDetailResponse>(
      `/api/v1/schedules/${scheduleId}`
    );

    return res.data;
  },

  deleteSchedule: async (scheduleId: number) => {
    const res = await instance.delete<DeleteScheduleResponse>(
      `/api/v1/schedules/${scheduleId}`
    );

    return res.data;
  },
};
