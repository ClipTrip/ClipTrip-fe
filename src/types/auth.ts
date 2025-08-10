import type { ApiSuccessResponse } from '@/types/api';
import type { LanguageName } from '@/types/type';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends ApiSuccessResponse {
  data: {
    language: LanguageName;
  };
}

export interface AuthenticationResponse extends ApiSuccessResponse {
  data: {
    isTokenVerified: boolean;
  };
}

export interface LogOutResponse extends ApiSuccessResponse {}
