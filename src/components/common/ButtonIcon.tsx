import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType;
  className?: string;
  onClick?: () => void;
}

const ButtonIcon = ({ Icon, className, onClick, ...props }: ButtonIconProps) => {
  return (
    <button
      tabIndex={-1}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={cn(
        "w-12 h-12 bg-sy_container-neutral-white rounded-010 flex items-center justify-center active:bg-sy_container-neutral-normal cursor-pointer disabled:cursor-default",
        className
      )}
      {...props}
    >
      <Icon />
    </button>
  );
};

export default ButtonIcon;
