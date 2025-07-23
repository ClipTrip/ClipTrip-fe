import { cn } from "@/lib/utils";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  className?: string;
}

const Pagination = ({ totalPage, currentPage, className }: PaginationProps) => (
  <div className={cn("flex w-fit gap-004 h-1.5", className)}>
    {Array.from({ length: totalPage }).map((_, idx) => (
      <span
        key={idx}
        className={cn(
          "h-1.5 w-1.5 rounded-full bg-sy_container-neutral-strong transition-all duration-200",
          currentPage === idx + 1 && "bg-sy_container-primary-normal w-[14px]"
        )}
      />
    ))}
  </div>
);

export default Pagination;
