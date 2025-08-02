import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

const ButtonText = ({ title, className, ...props }: ButtonTextProps) => {
  return (
    <button
      className={cn(
        'label_m text-sy_label-normal disabled:text-sy_label-light bg-sy_container-neutral-white active:bg-sy_container-neutral-normal h-12 w-12 cursor-pointer',
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default ButtonText;
