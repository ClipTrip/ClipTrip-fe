import { authApi } from '@/services/authService';
import axios, { type AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  async (res) => {
    const isVerifiedApi = res.config.url === '/api/v1/auth/verify';
    if (isVerifiedApi && !res.data.data.isTokenVerified) {
      const originalRequest = res.config;
      await authApi.tokenRefresh();
      return instance(originalRequest);
    }
    return res;
  },
  async (error) => {
    if (axios.isAxiosError(error)) {
      const originalRequest = error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await authApi.tokenRefresh();
          return instance(originalRequest);
        } catch (refreshErr) {
          alert('로그인이 만료되었습니다.');
          await authApi.logout();
          const currentPath = window.location.pathname + window.location.search;
          window.location.href = localStorage.getItem('language')
            ? `/login?redirect=${encodeURIComponent(currentPath)}`
            : '/onboarding';
          return Promise.reject(refreshErr);
        }
      }

      return Promise.reject(error.response?.data);
    } else {
      return Promise.reject(new Error('알 수 없는 오류가 발생하였습니다.'));
    }
  }
);
