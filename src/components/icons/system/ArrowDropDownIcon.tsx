import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const ArrowDropDownIcon = ({ className }: SystemIconProps) => {
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
        d="M16.9502 10.1718C17.3404 10.5623 17.3404 11.1954 16.9502 11.5859L12.7071 15.8281L12.6309 15.8974C12.2381 16.2175 11.659 16.1941 11.293 15.8281L7.04983 11.5859C6.6596 11.1954 6.65964 10.5623 7.04983 10.1718C7.44035 9.78131 8.07434 9.78131 8.46487 10.1718L12 13.707L15.5352 10.1718C15.9257 9.78131 16.5597 9.78131 16.9502 10.1718Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDropDownIcon;
