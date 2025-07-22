import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const LocationIcon = ({ className }: SystemIconProps) => {
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
        d="M12.75 4.5C16.0637 4.5 18.75 7.13876 18.75 10.3936C18.7499 13.6484 16.0636 19.5 12.75 19.5C9.43637 19.5 6.75012 13.6484 6.75 10.3936C6.75 7.13876 9.43629 4.5 12.75 4.5ZM12.752 7.5C11.3712 7.5 10.252 8.61929 10.252 10C10.252 11.3807 11.3712 12.5 12.752 12.5C14.1327 12.5 15.252 11.3807 15.252 10C15.252 8.61929 14.1327 7.5 12.752 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocationIcon;
