import { cn } from "@/lib/utils";

interface AccessibilityIconProps {
  className?: string;
}

const AudioGuideAvailableIcon = ({ className }: AccessibilityIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-color-accessibility", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H18.7773V10.8887H18.75C18.7499 9.12073 18.0391 7.42498 16.7734 6.1748C15.5076 4.92462 13.7901 4.22272 12 4.22266C10.21 4.22273 8.49332 4.92478 7.22754 6.1748C5.96172 7.425 5.25006 9.12064 5.25 10.8887H5.22168V12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H5C3.89543 21 3 20.1046 3 19V10.8887C3.00006 8.53127 3.94894 6.27045 5.63672 4.60352C7.32446 2.93678 9.61329 2.00006 12 2C14.3869 2.00006 16.6765 2.93658 18.3643 4.60352C20.0519 6.27044 20.9999 8.53134 21 10.8887V19Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AudioGuideAvailableIcon;
