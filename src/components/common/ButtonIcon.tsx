import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ElementType } from 'react';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType;
  className?: string;
  onClick?: () => void;
}

const ButtonIcon = ({
  Icon,
  className,
  onClick,
  ...props
}: ButtonIconProps) => {
  return (
    <button
      tabIndex={-1}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={cn(
        'bg-sy_container-neutral-white rounded-010 active:bg-sy_container-neutral-normal flex h-12 w-12 items-center justify-center disabled:cursor-default',
        !!onClick && 'cursor-pointer',
        className
      )}
      {...props}
    >
      <Icon />
    </button>
  );
};

export default ButtonIcon;
