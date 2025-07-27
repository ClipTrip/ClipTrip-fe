import { instance } from "@/lib/axios";
import type { ApiFailResponse } from "@/types/api";
import type { LoginRequest } from "@/types/auth";

export const authApi = {
  authentication: async () => {
    const res = await instance.post("/api/v1/users/me");

    return res.data;
  },
  login: async (data: LoginRequest) => {
    const res = await instance.post("/api/v1/users/sign-in", data);

    if (res.data.resultType === "FAIL") {
      throw res.data as ApiFailResponse;
    }

    return res.data;
  }
};
