import { instance } from '@/lib/axios';
import type { WaypointsRequest, WaypointsResponse } from '@/types/direction';

export const directionApi = {
  waypoints: async (data: WaypointsRequest) => {
    const res = await instance.post<WaypointsResponse>(
      '/api/v1/directions/waypoints',
      data
    );

    return res.data;
  },
};
