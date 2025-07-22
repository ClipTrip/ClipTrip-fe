import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ShareIcon = ({ className }: SystemIconProps) => {
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
        d="M18 2C19.6569 2 21 3.34315 21 5C21 6.65685 19.6569 8 18 8C17.2372 8 16.543 7.71302 16.0137 7.24414L8.92383 11.3379C8.9719 11.5511 9 11.7723 9 12C9 12.2274 8.97177 12.4482 8.92383 12.6611L16.0137 16.7549C16.543 16.2863 17.2375 16 18 16C19.6569 16 21 17.3431 21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 18.7577 15.0307 18.5226 15.085 18.2969L8.0166 14.2158C7.4836 14.7012 6.77768 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C6.77744 9 7.48365 9.2981 8.0166 9.7832L15.085 5.70215C15.0309 5.47675 15 5.24199 15 5C15 3.34315 16.3431 2 18 2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ShareIcon;
