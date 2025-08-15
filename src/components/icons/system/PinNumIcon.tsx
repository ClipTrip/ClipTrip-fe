import { cn } from '@/lib/utils';

interface SystemIconProps {
  className?: string;
  number?: number;
}

const PinNumIcon = ({ className, number = 1 }: SystemIconProps) => {
  return (
    <svg
      className={cn('text-sy_icon-neutral-normal', className)}
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.0615 1C19.6188 1 24.124 5.50525 24.124 11.0625C24.1238 16.6198 19.6186 26.0625 14.0615 26.0625C8.50459 26.062 4.0002 16.6197 4 11.0625C4 5.50539 8.50447 1.00023 14.0615 1Z'
        fill='currentColor'
      />
      <text
        x='50%'
        y='50%'
        textAnchor='middle'
        fill='white'
        fontSize='12px'
        fontFamily='Pretendard'
        fontWeight='700'
        letterSpacing='-0.3'
        dominantBaseline='middle'
        dy='0.5'
      >
        {number}
      </text>
    </svg>
  );
};

export default PinNumIcon;
