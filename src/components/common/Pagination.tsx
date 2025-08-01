import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  className?: string;
}

const Pagination = ({ totalPage, currentPage, className }: PaginationProps) => (
  <div className={cn('gap-004 flex h-1.5 w-fit', className)}>
    {Array.from({ length: totalPage }).map((_, idx) => (
      <span
        key={idx}
        className={cn(
          'bg-sy_container-neutral-strong h-1.5 w-1.5 rounded-full transition-all duration-200',
          currentPage === idx + 1 && 'bg-sy_container-primary-normal w-[14px]'
        )}
      />
    ))}
  </div>
);

export default Pagination;
