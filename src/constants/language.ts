import type { LoginResponse } from '@/types/auth';
import type { LanguageType } from '@/types/type';

export const LANGUAGE: Record<LoginResponse['data']['language'], LanguageType> =
  {
    KOREAN: 'ko',
    ENGLISH: 'en',
  } as const;
