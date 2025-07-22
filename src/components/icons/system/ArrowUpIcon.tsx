import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ArrowUpIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-neutral-normal", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 8.06642C11 7.97733 10.8923 7.93271 10.8293 7.99571L6.11253 12.7125C5.72003 13.105 5.08281 13.1021 4.69381 12.7062C4.30964 12.3152 4.31241 11.6876 4.70003 11.3L10.5858 5.41421C11.3668 4.63316 12.6332 4.63316 13.4142 5.41421L19.3 11.3C19.6876 11.6876 19.6904 12.3152 19.3062 12.7062C18.9172 13.1021 18.28 13.105 17.8875 12.7125L13.1707 7.99571C13.1077 7.93271 13 7.97733 13 8.06642L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 8.06642Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowUpIcon;
