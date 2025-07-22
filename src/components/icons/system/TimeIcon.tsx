import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const TimeIcon = ({ className }: SystemIconProps) => {
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
        d="M12.5 4.5C16.6421 4.5 19.9999 7.85798 20 12C20 16.1421 16.6421 19.5 12.5 19.5C8.35786 19.5 5 16.1421 5 12C5.00013 7.85798 8.35795 4.5 12.5 4.5ZM12.502 7.5C12.0877 7.5 11.752 7.83579 11.752 8.25V11.9619C11.7513 11.9745 11.75 11.9872 11.75 12C11.75 12.4142 12.0858 12.75 12.5 12.75H16.25C16.6642 12.75 17 12.4142 17 12C16.9999 11.5859 16.6642 11.25 16.25 11.25H13.252V8.25C13.252 7.83595 12.9159 7.50026 12.502 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TimeIcon;
