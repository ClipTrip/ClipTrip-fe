import { cn } from "@/lib/utils";

interface NaviIconProps {
  className?: string;
  isActive?: boolean;
}

const ProfileIcon = ({ className, isActive }: NaviIconProps) => {
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
        d="M12 14.2139C15.4961 14.2139 18.4993 16.0237 19.8047 18.6094C20.5513 20.0885 19.1569 21.5 17.5 21.5H6.5C4.84329 21.4998 3.44877 20.0884 4.19531 18.6094C5.50055 16.0236 8.50388 14.214 12 14.2139ZM12 4.5C14.3472 4.5 16.25 6.40279 16.25 8.75C16.25 11.0972 14.3472 13 12 13C9.65294 12.9998 7.75 11.0971 7.75 8.75C7.75 6.4029 9.65294 4.50018 12 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ProfileIcon;
