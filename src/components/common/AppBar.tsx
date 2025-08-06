import { cn } from '@/lib/utils';
import { renderIconElement } from '@/utils/renderIconElement';
import { type ElementType, type ReactNode } from 'react';

interface IconButtonProps {
  Icon?: ElementType;
  onClick?: () => void;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <button
      className={cn(
        'flex h-12 w-12 shrink-0 items-center justify-center',
        Icon && 'cursor-pointer'
      )}
      onClick={onClick}
      disabled={!Icon}
    >
      {Icon ? <Icon /> : null}
    </button>
  );
};

interface AppBarProps {
  title?: string;
  LeadingIcon?: ElementType;
  FirstIcon?: ElementType | ReactNode;
  SecondIcon?: ElementType | ReactNode;
  ThirdIcon?: ElementType | ReactNode;
  onLeadingIconClick?: () => void;
  onFirstIconClick?: () => void;
  onSecondIconClick?: () => void;
  onThirdIconClick?: () => void;
}

const AppBar = ({
  title,
  LeadingIcon,
  FirstIcon,
  SecondIcon,
  ThirdIcon,
  onLeadingIconClick,
  onFirstIconClick,
  onSecondIconClick,
  onThirdIconClick,
}: AppBarProps) => {
  return (
    <header className='px-012 flex h-[52px] w-[360px] items-center'>
      <div className='flex w-full items-center'>
        {LeadingIcon && (
          <IconButton
            Icon={LeadingIcon}
            onClick={onLeadingIconClick}
          />
        )}
        <h3
          className={cn(
            'pl-012 headline_m text-sy_label-strong w-full',
            LeadingIcon && 'pl-0'
          )}
        >
          {title}
        </h3>
      </div>
      <div className='flex h-fit w-fit'>
        {renderIconElement(
          FirstIcon,
          <IconButton
            Icon={FirstIcon as ElementType}
            onClick={onFirstIconClick}
          />
        )}

        {renderIconElement(
          SecondIcon,
          <IconButton
            Icon={SecondIcon as ElementType}
            onClick={onSecondIconClick}
          />
        )}

        {renderIconElement(
          ThirdIcon,
          <IconButton
            Icon={ThirdIcon as ElementType}
            onClick={onThirdIconClick}
          />
        )}
      </div>
    </header>
  );
};

export default AppBar;
