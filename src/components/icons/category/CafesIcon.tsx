import { cn } from "@/lib/utils";

interface CategoryIconProps {
  className?: string;
  size?: "m" | "s";
}

const CafesIcon = ({ size = "m", className }: CategoryIconProps) => {
  return (
    <svg
      className={cn(
        "text-sy_icon-color-cafes",
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
        d="M18.9206 5C19.9809 5.00051 20.999 5.4749 21.7487 6.31836C22.4984 7.1621 22.9195 8.307 22.9196 9.5C22.9195 10.6932 22.4987 11.8388 21.7487 12.6826C20.999 13.5261 19.9809 13.9985 18.9206 13.999V14H17.9206V15H17.9196C17.9196 17.7609 15.6814 19.9987 12.9206 19.999H7.91963C5.15853 19.999 2.91963 17.7611 2.91963 15H2.92061V7C2.92061 5.89549 3.81613 5.0001 4.92061 5H18.9206ZM18.9206 12.001C19.4508 12.0007 19.9608 11.7371 20.3356 11.2686C20.7105 10.7999 20.9204 10.1636 20.9206 9.50098C20.9206 8.83824 20.7104 8.2012 20.3356 7.73242C19.9608 7.26385 19.4507 7.00122 18.9206 7.00098V12.001ZM17.9206 12H18.9196V7H17.9206V12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CafesIcon;
