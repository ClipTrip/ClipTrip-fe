import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ChevronRightIcon = ({ className }: SystemIconProps) => {
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
        d="M9.70723 7.04988C10.0977 6.65975 10.7308 6.65972 11.1213 7.04988L15.3635 11.293L15.4328 11.3692C15.7529 11.762 15.7295 12.3411 15.3635 12.7071L11.1213 16.9503C10.7308 17.3405 10.0977 17.3405 9.70723 16.9503C9.31671 16.5597 9.31671 15.9258 9.70723 15.5352L13.2424 12.0001L9.70723 8.46492C9.31671 8.0744 9.31671 7.44041 9.70723 7.04988Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronRightIcon;
