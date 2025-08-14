import type { ApiSuccessResponse } from '@/types/api';

export interface GetSchedulesResponse extends ApiSuccessResponse {
  data: {
    scheduleId: number;
    scheduleName: string;
    description: string;
  }[];
}
