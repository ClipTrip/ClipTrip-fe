import type { ApiSuccessResponse } from '@/types/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends ApiSuccessResponse {
  data: {
    language: 'ENGLISH' | 'KOREAN';
  };
}

export interface AuthenticationResponse extends ApiSuccessResponse {
  data: {
    isTokenVerified: boolean;
  };
}

export interface LogOutResponse extends ApiSuccessResponse {}
