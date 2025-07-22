import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const CloseIcon = ({ className }: SystemIconProps) => {
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
        d="M16.9494 5.636C17.3399 5.24553 17.9729 5.24565 18.3635 5.636C18.754 6.02653 18.754 6.65954 18.3635 7.05006L13.4133 11.9993L18.3635 16.9495C18.7539 17.34 18.7539 17.973 18.3635 18.3635C17.9729 18.7541 17.3399 18.7541 16.9494 18.3635L11.9992 13.4133L7.04999 18.3635C6.65946 18.7541 6.02645 18.7541 5.63593 18.3635C5.24557 17.973 5.24546 17.3399 5.63593 16.9495L10.5851 11.9993L5.63593 7.05006C5.2454 6.65954 5.2454 6.02653 5.63593 5.636C6.02646 5.24561 6.65951 5.24552 7.04999 5.636L11.9992 10.5852L16.9494 5.636Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloseIcon;
