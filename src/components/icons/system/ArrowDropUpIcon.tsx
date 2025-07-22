import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ArrowDropUpIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-neutral-light", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.95 13.8285C17.3404 13.438 17.3405 12.8049 16.95 12.4144L12.7069 8.17225L12.6317 8.10291C12.2389 7.78249 11.659 7.8061 11.2928 8.17225L7.05062 12.4144C6.6601 12.805 6.6601 13.438 7.05062 13.8285C7.44115 14.219 8.07417 14.219 8.46469 13.8285L12.0008 10.2933L15.536 13.8285C15.9265 14.219 16.5595 14.219 16.95 13.8285Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDropUpIcon;
