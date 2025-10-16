import { createTokenAxios } from '@jjjk0605/axios-token-refresh';
import { useAuthStore } from '@/store/tokenStore';
import type { TokenRefreshResponse } from '@/types/auth';

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
});
