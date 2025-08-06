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
    grantType: string;
  };
}

export interface LogOutResponse extends ApiSuccessResponse {}
