import { instance } from '@/lib/axios';
import type { LoginRequest, LoginResponse } from '@/types/auth';

export const authApi = {
  authentication: async () => {
    const res = await instance.post('/api/v1/users/me');

    return res.data;
  },
  login: async (data: LoginRequest) => {
    const res = await instance.post<LoginResponse>(
      '/api/v1/users/sign-in',
      data
    );

    return res.data;
  },
  logout: async () => {
    const res = await instance.post('/api/v1/auth/logout');

    return res.data;
  },
};
