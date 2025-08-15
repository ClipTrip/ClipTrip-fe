import { scheduleApi } from '@/services/scheduleService';
import type { ApiFailResponse, ApiSuccessResponse } from '@/types/api';
import type {
  DeleteScheduleResponse,
  GetScheduleDetailResponse,
  GetSchedulesResponse,
  PatchScheduleProps,
  PatchScheduleResponse,
} from '@/types/schedule';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetSchedules = () => {
  return useQuery<GetSchedulesResponse, ApiFailResponse>({
    queryFn: () => scheduleApi.getSchedules(),
    queryKey: ['schedules'],
  });
};

export const useGetScheduleDetail = (id?: string) => {
  return useQuery<GetScheduleDetailResponse, ApiFailResponse>({
    queryFn: () => scheduleApi.getScheduleDetail(+id!),
    queryKey: ['schedules', id],
    enabled: !!id,
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

export const usePatchSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation<
    PatchScheduleResponse,
    ApiFailResponse,
    PatchScheduleProps,
    PatchScheduleProps
  >({
    mutationFn: ({ scheduleId, data }) =>
      scheduleApi.patchSchedule({ scheduleId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['schedules'],
      });
      toast.success('일정이 수정 되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useAddSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<ApiSuccessResponse, ApiFailResponse>({
    mutationFn: () => scheduleApi.addSchedule(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['schedules'],
        exact: true,
      });
      toast.success('일정이 추가되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
