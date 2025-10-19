import { createPortal } from 'react-dom';
import Loading from '@/components/common/Loading';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface FullPageLoadingProps {
  className?: string;
  children?: ReactNode;
}

const FullPageLoading = ({ className, children }: FullPageLoadingProps) => {
  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/60',
        className
      )}
    >
      <Loading />
      {children}
    </div>,
    document.body
  );
};

export default FullPageLoading;
