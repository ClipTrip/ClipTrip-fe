import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const PinNoneIcon = ({ className }: SystemIconProps) => {
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
        d="M14.0615 1C19.6188 1 24.124 5.50525 24.124 11.0625C24.1238 16.6198 19.6186 26.0625 14.0615 26.0625C8.50459 26.062 4.0002 16.6197 4 11.0625C4 5.50539 8.50447 1.00023 14.0615 1ZM14 6.41406C11.5148 6.41406 9.50008 8.42885 9.5 10.9141C9.5 13.3993 11.5147 15.4141 14 15.4141C16.4853 15.4141 18.5 13.3993 18.5 10.9141C18.4999 8.42885 16.4852 6.41406 14 6.41406Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PinNoneIcon;
