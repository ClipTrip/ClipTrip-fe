import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ArrowBackIcon = ({ className }: SystemIconProps) => {
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
        d="M8.06642 13C7.97733 13 7.93271 13.1077 7.99571 13.1707L12.7125 17.8875C13.105 18.28 13.1021 18.9172 12.7062 19.3062C12.3152 19.6904 11.6876 19.6876 11.3 19.3L5.41421 13.4142C4.63316 12.6332 4.63317 11.3668 5.41421 10.5858L11.3 4.70003C11.6876 4.31241 12.3152 4.30964 12.7062 4.69381C13.1021 5.08281 13.105 5.72003 12.7125 6.11253L7.99571 10.8293C7.93271 10.8923 7.97733 11 8.06642 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H8.06642Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowBackIcon;
