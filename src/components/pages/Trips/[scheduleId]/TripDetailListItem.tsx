import { cn } from '@/lib/utils';
import { type ElementType, type ReactNode } from 'react';

interface TripDetailListItemProps {
  Pin?: ElementType;
  title: string;
  category: string;
  time: number;
  className?: string;
  RightIcon?: ReactNode;
  onClick?: () => void;
  onPinClick?: () => void;
}

const TripDetailListItem = ({
  Pin,
  title,
  category,
  time,
  className,
  RightIcon,
  onClick,
  onPinClick,
}: TripDetailListItemProps) => {
  return (
    <div
      className={cn(
        'pt-008 pr-012 pl-024 bg-sy_container-neutral-white active:bg-sy_container-neutral-normal flex cursor-pointer items-center',
        className
      )}
    >
      {Pin && (
        <div className='pr-012 relative h-[82px] w-9'>
          <button onClick={onPinClick}>
            <Pin />
          </button>
          <div className='absolute left-3 top-6 h-[47px] border' />
          <div className='absolute left-3 top-[71px] w-4 border' />
        </div>
      )}
      <button
        onClick={onClick}
        className={cn(
          'gap-004 pr-012 flex grow flex-col justify-center text-left',
          onClick && 'cursor-pointer'
        )}
      >
        <h2
          data-state={status}
          className='data-[state=delete]:text-sy_label-light title_m text-sy_label-normal'
        >
          {title}
        </h2>
        <p className='body_m text-sy_label-light'>{category}</p>
        <p className='body_m text-sy_label-light'>{time}분</p>
      </button>
      {RightIcon}
    </div>
  );
};

export default TripDetailListItem;
