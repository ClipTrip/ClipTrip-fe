import Loading from '@/components/common/Loading';

const VideosLoading = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
      <Loading />
    </div>
  );
};

export default VideosLoading;
