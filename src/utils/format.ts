import type { DateRange } from 'react-day-picker';
import { format } from 'date-fns';

export const formatDateRange = (range?: DateRange) => {
  if (!range) return null;
  if (!range.from) return '';
  if (!range.to) return format(range.from, 'yyyy.MM.dd');

  return `${format(range.from, 'yyyy.MM.dd')} ~ ${format(range.to, 'yyyy.MM.dd')}`;
};
