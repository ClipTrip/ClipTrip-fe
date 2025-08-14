import { createPortal } from 'react-dom';
import Loading from '@/components/common/Loading';
import { cn } from '@/lib/utils';

interface FullPageLoadingProps {
  className?: string;
}

const FullPageLoading = ({ className }: FullPageLoadingProps) => {
  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-black/60',
        className
      )}
    >
      <Loading />
    </div>,
    document.body
  );
};

export default FullPageLoading;
