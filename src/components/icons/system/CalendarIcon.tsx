import { cn } from '@/lib/utils';

interface SystemIconProps {
  className?: string;
}

const CalendarIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn('text-sy_icon-neutral-alternative', className)}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.25 3C11.6642 3 12 3.33579 12 3.75V4.5H13.5C14.3284 4.5 15 5.17157 15 6V13.5C15 14.3284 14.3284 15 13.5 15H4.5C3.6716 15 3.00005 14.3284 3 13.5V6C3 5.17157 3.67157 4.5 4.5 4.5H6V3.75C6 3.33579 6.33579 3 6.75 3C7.16421 3 7.5 3.33579 7.5 3.75V4.5H10.5V3.75C10.5 3.33579 10.8358 3 11.25 3ZM5.25 5.83594C4.83583 5.83594 4.50007 6.17179 4.5 6.58594V7.33594H13.5V6.58594C13.4999 6.17179 13.1642 5.83594 12.75 5.83594H12V6C12 6.41421 11.6642 6.75 11.25 6.75C10.8358 6.75 10.5 6.41421 10.5 6V5.83594H7.5V6C7.5 6.41421 7.16421 6.75 6.75 6.75C6.33579 6.75 6 6.41421 6 6V5.83594H5.25Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default CalendarIcon;
