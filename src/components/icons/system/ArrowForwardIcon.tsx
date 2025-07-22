import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ArrowForwardIcon = ({ className }: SystemIconProps) => {
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
        d="M15.9336 13C16.0227 13 16.0673 13.1077 16.0043 13.1707L11.2875 17.8875C10.895 18.28 10.8979 18.9172 11.2938 19.3062C11.6848 19.6904 12.3124 19.6876 12.7 19.3L18.5858 13.4142C19.3668 12.6332 19.3668 11.3668 18.5858 10.5858L12.7 4.70003C12.3124 4.31241 11.6848 4.30964 11.2938 4.69381C10.8979 5.08281 10.895 5.72003 11.2875 6.11253L16.0043 10.8293C16.0673 10.8923 16.0227 11 15.9336 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13H15.9336Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowForwardIcon;
