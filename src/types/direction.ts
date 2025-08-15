import type { ApiSuccessResponse } from '@/types/api';

export interface WaypointsRequest {
  originName: string;
  originLatitude: number;
  originLongitude: number;
  destinationName: string;
  destinationLatitude: number;
  destinationLongitude: number;
  wayPoints: {
    name: string;
    latitude: number;
    longitude: number;
  }[];
}

export interface WaypointsResponse extends ApiSuccessResponse {
  data: {
    transId: string;
    routes: [
      {
        resultCode: number;
        resultMsg: string;
        summary: {
          origin: {
            name: string;
            x: number;
            y: number;
          };
          destination: {
            name: string;
            x: number;
            y: number;
          };
          waypoints: {
            name: string;
            x: number;
            y: number;
          }[];
          priority: string;
          bound: {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
          };
          fare: {
            taxi: number;
            toll: number;
          };
          distance: number;
          duration: number;
        };
        sections: {
          distance: number;
          duration: number;
          bound: {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
          };
          roads: {
            name: string;
            distance: number;
            duration: number;
            trafficSpeed: number;
            trafficState: number;
            vertexes: number[];
          }[];
        }[];
      },
    ];
  };
}
