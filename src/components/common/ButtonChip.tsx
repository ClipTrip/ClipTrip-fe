import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ElementType } from 'react';

interface ButtonChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  isActive?: boolean;
  Icon?: ElementType;
}

const ButtonChip = ({
  Icon,
  className,
  isActive = false,
  label,
  ...props
}: ButtonChipProps) => {
  return (
    <button
      className={cn(
        'label_s px-012 rounded-010 gap-004 bg-sy_container-primary-white border-sy_line-normal active:bg-sy_container-primary-normal text-sy_label-light active:text-sy_label-white [&>svg]:text-sy_icon-neutral-alternative [&>svg]:active:text-sy_icon-neutral-white flex h-[34px] cursor-pointer items-center border',
        isActive
          && 'bg-sy_container-primary-normal text-sy_label-white [&>svg]:text-sy_icon-neutral-white',
        className
      )}
      {...props}
    >
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
  );
};

export default ButtonChip;
