import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  isActive?: boolean;
  Icon?: ElementType;
}

const ButtonChip = ({ Icon, className, isActive = false, label, ...props }: ButtonChipProps) => {
  return (
    <button
      className={cn(
        "label_s h-[34px] px-012 rounded-010 flex gap-004 items-center bg-sy_container-primary-white border border-sy_line-normal active:bg-sy_container-primary-normal cursor-pointer text-sy_label-light active:text-sy_label-white [&>svg]:text-sy_icon-neutral-alternative [&>svg]:active:text-sy_icon-neutral-white",
        isActive &&
          "bg-sy_container-primary-normal text-sy_label-white [&>svg]:text-sy_icon-neutral-white",
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
