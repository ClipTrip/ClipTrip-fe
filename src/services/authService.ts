import { instance } from '@/lib/axios';
import type { LoginRequest, LoginResponse } from '@/types/auth';
import axios from 'axios';

export const authApi = {
  verify: async () => {
    const res = await instance.get('/api/v1/auth/verify');

    return res.data;
  },

  login: async (data: LoginRequest) => {
    const res = await axios.post<LoginResponse>(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/sign-in`,
      data,
      {
        withCredentials: true,
      }
    );

    return res.data;
  },

  logout: async () => {
    const res = await instance.post('/api/v1/auth/logout');

    return res.data;
  },

  tokenRefresh: async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/refresh`,
      {},
      { withCredentials: true }
    );

    return res.data;
  },
};
