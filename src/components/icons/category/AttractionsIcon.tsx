import { cn } from "@/lib/utils";

interface CategoryIconProps {
  className?: string;
  size?: "m" | "s";
}

const AttractionsIcon = ({ size = "m", className }: CategoryIconProps) => {
  return (
    <svg
      className={cn(
        "text-sy_icon-color-attractions",
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
        d="M6.07954 2C6.63183 2 7.07954 2.44772 7.07954 3V3.93262C7.61513 3.70683 9.39099 3.00004 10.6704 3C12.1871 3.00016 14.4019 3.99172 14.4204 4C14.4487 4.01368 16.4954 4.99994 18.1704 5C19.0371 4.99993 20.0042 4.73623 20.7387 4.47949C21.2958 4.28516 21.9201 4.68636 21.9204 5.27637V14.4824C21.9203 14.7973 21.7356 15.0824 21.4428 15.1982C20.7047 15.4898 19.2579 15.9999 18.1704 16C16.6576 15.9999 14.4502 15.0133 14.4204 15C14.403 14.9916 12.3499 14.0001 10.6704 14C9.26334 14 7.59437 14.697 7.07954 14.9277V21C7.07954 21.5523 6.63183 22 6.07954 22C5.5273 22 5.07954 21.5523 5.07954 21V3C5.07954 2.44775 5.5273 2.00005 6.07954 2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AttractionsIcon;
