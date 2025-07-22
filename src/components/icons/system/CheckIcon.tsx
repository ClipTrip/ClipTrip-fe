import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
  isActive?: boolean;
}

const CheckIcon = ({ className, isActive }: SystemIconProps) => {
  return (
    <svg
      className={cn(
        "text-sy_icon-neutral-light",
        isActive && "text-sy_icon-neutral-normal",
        className
      )}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.12605 11.2928C7.51658 10.9022 8.14974 10.9022 8.54027 11.2928L10.6616 13.4141L15.6113 8.46434C16.0019 8.07382 16.635 8.07382 17.0255 8.46434C17.4161 8.85487 17.4161 9.48803 17.0255 9.87856L11.3687 15.5354C10.9782 15.9259 10.345 15.9259 9.95448 15.5354L7.12605 12.707C6.73553 12.3165 6.73553 11.6833 7.12605 11.2928Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckIcon;
