import ButtonIcon from '@/components/common/ButtonIcon';
import { cn } from '@/lib/utils';
import { isValidElement, type ElementType, type ReactNode } from 'react';

interface ListItemProps {
  title: string;
  description?: string;
  Pin?: ElementType;
  onPinClick?: () => void;
  RightIcon?: ElementType | ReactNode;
  onRightIconClick?: () => void;
  status?: 'delete';
}

const ListItem = ({
  Pin,
  RightIcon,
  title,
  description,
  status,
  onPinClick,
  onRightIconClick,
}: ListItemProps) => {
  const renderRightIcon = () => {
    if (!RightIcon) return null;

    if (isValidElement(RightIcon)) {
      return RightIcon;
    }

    if (typeof RightIcon === 'function') {
      return (
        <ButtonIcon
          Icon={RightIcon}
          onClick={onRightIconClick}
        />
      );
    }

    return null;
  };
  return (
    <div className='py-008 pr-012 pl-024 bg-sy_container-neutral-white active:bg-sy_container-neutral-normal flex cursor-pointer'>
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
      <div className='gap-004 pr-012 flex grow flex-col'>
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
      </div>
      {renderRightIcon()}
    </div>
  );
};

export default ListItem;
