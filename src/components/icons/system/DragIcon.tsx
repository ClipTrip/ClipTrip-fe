import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const DragIcon = ({ className }: SystemIconProps) => {
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
        d="M19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16H18C18.5523 16 19 16.4477 19 17ZM19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12ZM19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DragIcon;
