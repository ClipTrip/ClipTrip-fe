import { cn } from "@/lib/utils";

interface NaviIconProps {
  className?: string;
  isActive?: boolean;
}

const HomeIcon = ({ className, isActive }: NaviIconProps) => {
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
        d="M10.1982 3.84866C11.2656 3.04955 12.7328 3.05061 13.7988 3.85159L19.8018 8.36331C20.5557 8.92988 20.9998 9.81769 21 10.7608V18.5C20.9999 20.1568 19.6568 21.5 18 21.5H5.9668C4.31 21.5 2.96689 20.1568 2.9668 18.5V10.7647C2.96684 9.81958 3.41239 8.92975 4.16895 8.36331L10.1982 3.84866ZM17 15.8155C17 15.1681 16.3643 14.7037 15.7393 14.8721C14.6838 15.1565 13.1671 15.5 12 15.5C10.8329 15.5 9.31624 15.1565 8.26074 14.8721C7.63567 14.7037 7 15.1681 7 15.8155C7.00005 16.2242 7.2611 16.5862 7.65332 16.7012C8.6497 16.9932 10.5826 17.5 12 17.5C13.4174 17.5 15.3503 16.9932 16.3467 16.7012C16.7389 16.5862 16.9999 16.2242 17 15.8155Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomeIcon;
