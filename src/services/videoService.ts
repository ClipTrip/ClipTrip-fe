import { instance } from "@/lib/axios";
import type { VideosRequest } from "@/types/video";

export const videoApi = {
  youtube: async (data: VideosRequest) => {
    const res = await instance.post("/api/v1/videos", data, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJhdXRoIjoiUk9MRV9VU0VSIiwidHlwZSI6IkFjY2VzcyIsImV4cCI6MTc1MzM3Mzc4NH0.0dU8mw60UP2UBJwytE2g1yLQ6m4ectdDkSBWJvnRxuM"
      }
    });

    return res.data;
  }
};
