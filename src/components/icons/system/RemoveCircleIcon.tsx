import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const RemoveCircleIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-color-remove", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <rect x="17" y="11" width="2" height="10" rx="1" transform="rotate(90 17 11)" fill="white" />
    </svg>
  );
};

export default RemoveCircleIcon;
