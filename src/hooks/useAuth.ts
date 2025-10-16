import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@/services/authService';
import type {
  AuthenticationResponse,
  LoginRequest,
  LoginResponse,
  LogOutResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/types/auth';
import { toast } from 'sonner';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { ApiFailResponse } from '@/types/api';
import type { AxiosError } from 'axios';
import { setLanguage } from '@/lib/i18n';
import { LANGUAGE } from '@/constants/language';
import { useAuthStore } from '@/store/tokenStore';

export const useAuthentication = () => {
  return useQuery<AuthenticationResponse, Error, AuthenticationResponse>({
    queryKey: ['verify'],
    queryFn: authApi.verify,
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();

  const redirectPath = searchParam.get('redirect') || '/';
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  return useMutation<LoginResponse, AxiosError<ApiFailResponse>, LoginRequest>({
    mutationFn: (data) => authApi.login(data),
    onSuccess: async (res) => {
      try {
        setAccessToken(res.data.accessToken);
        const verifyResult = await authApi.verify();
        if (verifyResult.data.isTokenVerified) {
          setLanguage(LANGUAGE[res.data.language]);
          queryClient.setQueryData(['verify'], verifyResult);
          navigate(redirectPath);
        }
      } catch {
        toast.error('인증 실패');
      }
    },

    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<
    RegisterResponse,
    AxiosError<ApiFailResponse>,
    RegisterRequest
  >({
    mutationFn: (data) => authApi.register(data),
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.');
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<LogOutResponse, ApiFailResponse>({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['me'] });
      toast.success('로그아웃 되었습니다.');
      navigate('/login');
    },
    onError: (error) => {
      console.log('로그아웃 실패:', error.message);
      toast.error(error.message);
    },
  });
};
