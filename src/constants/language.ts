import type { LanguageCode, LanguageName } from '@/types/type';

export const LANGUAGE: Record<LanguageName, LanguageCode> = {
  KOREAN: 'ko',
  ENGLISH: 'en',
  JAPANESE: 'ja',
  CHINESE: 'zh',
} as const;
