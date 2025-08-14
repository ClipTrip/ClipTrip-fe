import type { ApiSuccessResponse } from '@/types/api';
import type { LanguageName } from '@/types/type';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  gender: 'MALE' | 'FEMALE';
  age: number;
  language: 'KOREAN' | 'ENGLISH';
  countryCode: 'US' | 'KR' | 'CN' | 'JP' | 'TW' | 'HK' | 'TH' | 'IN' | 'DE' | 'FR' | 'UK' | 'CA' | 'AU';
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
export interface RegisterResponse extends ApiSuccessResponse {}
