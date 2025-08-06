import { createPortal } from 'react-dom';
import Loading from '@/components/common/Loading';

const FullPageLoading = () => {
  return createPortal(
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60'>
      <Loading />
    </div>,
    document.body
  );
};

export default FullPageLoading;
