import { cn } from "@/lib/utils";

interface NaviIconProps {
  className?: string;
  isActive?: boolean;
}

const PlansIcon = ({ className, isActive }: NaviIconProps) => {
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
        d="M10.7969 4.00857C11.1632 3.9104 11.5544 4.02813 11.8056 4.31228L16.5644 9.69412L18.9521 9.15994C20.2601 8.86688 21.5709 9.67297 21.918 10.9676C22.2089 12.0534 21.5517 13.1794 20.459 13.4431L8.85252 16.242L8.8535 16.2429C8.1348 16.4355 7.39525 16.5236 6.67772 16.5017C5.96033 16.4798 5.27888 16.348 4.67186 16.115C4.06475 15.882 3.54392 15.552 3.13963 15.1433C2.73552 14.7348 2.45538 14.256 2.31541 13.7342V13.7351L2.01366 11.3972C1.90767 10.5778 2.50497 9.83448 3.32811 9.76248C4.35433 9.67273 5.37084 10.0226 6.12401 10.7254L7.25487 11.7801L9.78807 11.2127L6.72752 5.74392C6.56856 5.45952 6.71944 5.10177 7.03416 5.01736L10.7969 4.00857Z"
        fill="currentColor"
      />
      <rect x="2" y="19.001" width="19.9994" height="2" rx="1" fill="currentColor" />
      <rect x="8.36041" y="19.001" width="7.27917" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};

export default PlansIcon;
