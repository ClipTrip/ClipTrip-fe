import { createTokenAxios } from '@jjjk0605/axios-token-refresh';
import { useAuthStore } from '@/store/tokenStore';
import type { TokenRefreshResponse } from '@/types/auth';
import { authApi } from '@/services/authService';

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const { client: instance } = createTokenAxios({
  baseURL,
  withCredentials: true,

  getAccessToken: () => useAuthStore.getState().accessToken,
  setAccessToken: (t) => useAuthStore.getState().setAccessToken(t),

  refreshRequest: async (refreshAxios) => {
    const res = await refreshAxios.post<TokenRefreshResponse>(
      '/api/v1/auth/refresh'
    );
    return res.data.data.accessToken;
  },

  headerName: 'Authorization',
  headerScheme: 'Bearer ',
  shouldRefresh: (err) => err.response?.status === 401,
  onRefreshFailure: async () => {
    alert('세션이 만료되었습니다. 다시 로그인해주세요.');
    await authApi.logout();
    useAuthStore.getState().setAccessToken(null);
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = localStorage.getItem('language')
      ? `/login?redirect=${encodeURIComponent(currentPath)}`
      : '/onboarding';
  },
});
