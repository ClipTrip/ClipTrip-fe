import type { LoginResponse } from '@/types/auth';
import type { LanguageCode } from '@/types/type';

export const LANGUAGE: Record<LoginResponse['data']['language'], LanguageCode> =
  {
    KOREAN: 'ko',
    ENGLISH: 'en',
    JAPANESE: 'ja',
    CHINESE: 'zh',
  } as const;
