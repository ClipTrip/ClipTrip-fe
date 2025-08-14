import { scheduleApi } from '@/services/scheduleService';
import type { ApiFailResponse } from '@/types/api';
import type {
  DeleteScheduleResponse,
  GetSchedulesResponse,
} from '@/types/schedule';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetSchedules = () => {
  return useQuery<GetSchedulesResponse, ApiFailResponse>({
    queryFn: () => scheduleApi.getSchedules(),
    queryKey: ['schedules'],
  });
};

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteScheduleResponse, ApiFailResponse, number>({
    mutationFn: (scheduleId) => scheduleApi.deleteSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['schedules'],
        exact: true,
      });
      toast.success('일정이 삭제되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
