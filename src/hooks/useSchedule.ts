import { scheduleApi } from '@/services/scheduleService';
import type { ApiFailResponse } from '@/types/api';
import type { GetSchedulesResponse } from '@/types/schedule';
import { useQuery } from '@tanstack/react-query';

export const useGetSchedules = () => {
  return useQuery<GetSchedulesResponse, ApiFailResponse>({
    queryFn: () => scheduleApi.getSchedules(),
    queryKey: ['schedules'],
  });
};
