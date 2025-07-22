import { cn } from "@/lib/utils";

interface CategoryIconProps {
  className?: string;
  size?: "m" | "s";
}

const HotelsIcon = ({ size = "m", className }: CategoryIconProps) => {
  return (
    <svg
      className={cn(
        "text-sy_icon-color-hotels",
        size === "m" && "w-6 h-6",
        size === "s" && "w-[18px] h-[18px]",
        className
      )}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.92036 4C4.47261 4 4.9203 4.44777 4.92036 5V6.5H6.92036C9.33928 6.5 11.3565 8.21781 11.8198 10.5H20.9204C22.0249 10.5 22.9204 11.3954 22.9204 12.5V19C22.9203 19.5522 22.4726 20 21.9204 20C21.3682 19.9999 20.9204 19.5521 20.9204 19V18.5C20.9204 18.2239 20.6965 18 20.4204 18H5.42036C5.14422 18 4.92036 18.2239 4.92036 18.5V19C4.92036 19.5523 4.47265 20 3.92036 20C3.36819 19.9999 2.92036 19.5522 2.92036 19V5C2.92043 4.44785 3.36823 4.00013 3.92036 4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HotelsIcon;
