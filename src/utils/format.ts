import type { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import i18n from '@/lib/i18n';

export const formatDateRange = (range?: DateRange) => {
  if (!range) return null;
  if (!range.from) return '';
  if (!range.to) return format(range.from, 'yyyy.MM.dd');

  return `${format(range.from, 'yyyy.MM.dd')} ~ ${format(range.to, 'yyyy.MM.dd')}`;
};

export const formatSeconds = (totalSeconds: number): string => {
  const s = i18n.t('seconds', { ns: 'info' });
  const m = i18n.t('minutes', { ns: 'info' });

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    return `${minutes}${m} ${seconds}${s}`;
  }
  return `${seconds}${s}`;
};
