import { directionApi } from '@/services/directionService';
import type { ApiFailResponse } from '@/types/api';
import type { WaypointsRequest, WaypointsResponse } from '@/types/direction';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useWaypoints = () => {
  return useMutation<WaypointsResponse, ApiFailResponse, WaypointsRequest>({
    mutationFn: (data) => directionApi.waypoints(data),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
