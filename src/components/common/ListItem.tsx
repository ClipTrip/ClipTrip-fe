import ButtonIcon from '@/components/common/ButtonIcon';
import { cn } from '@/lib/utils';
import { renderIconElement } from '@/utils/renderIconElement';
import { type ElementType, type ReactNode } from 'react';

interface ListItemProps {
  title: string;
  description?: string;
  Pin?: ElementType;
  LeftIcon?: ReactNode;
  RightIcon?: ElementType | ReactNode;
  status?: 'delete';
  className?: string;
  onClick?: () => void;
  onPinClick?: () => void;
  onRightIconClick?: () => void;
}

const ListItem = ({
  Pin,
  RightIcon,
  title,
  description,
  LeftIcon,
  status,
  className,
  onClick,
  onPinClick,
  onRightIconClick,
}: ListItemProps) => {
  return (
    <div
      className={cn(
        'py-008 pr-012 pl-024 bg-sy_container-neutral-white active:bg-sy_container-neutral-normal flex cursor-pointer items-center',
        className
      )}
    >
      {Pin && (
        <div className='pr-012 h-[51px] w-9 py-[3px]'>
          <button
            onClick={onPinClick}
            className={cn(!!onPinClick && 'cursor-pointer')}
          >
            <Pin />
          </button>
        </div>
      )}
      {LeftIcon}
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
        {description && (
          <p
            data-state={status}
            className='body_m text-sy_label-light'
          >
            {description}
          </p>
        )}
      </button>
      {renderIconElement(
        RightIcon,
        <ButtonIcon
          Icon={RightIcon as ElementType}
          onClick={onRightIconClick}
        />
      )}
    </div>
  );
};

export default ListItem;
