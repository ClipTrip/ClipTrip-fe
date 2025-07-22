import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const PinNumIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-neutral-normal", className)}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0615 1C19.6188 1 24.124 5.50525 24.124 11.0625C24.1238 16.6198 19.6186 26.0625 14.0615 26.0625C8.50459 26.062 4.0002 16.6197 4 11.0625C4 5.50539 8.50447 1.00023 14.0615 1Z"
        fill="currentColor"
      />
      <path
        d="M15.5742 6.57764V15.062H13.8047V8.25342H13.7578L11.8125 9.47217V7.91357L13.9102 6.57764H15.5742Z"
        fill="white"
      />
    </svg>
  );
};

export default PinNumIcon;
