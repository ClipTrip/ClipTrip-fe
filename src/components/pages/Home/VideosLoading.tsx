import Loading from "@/components/common/Loading";

const VideosLoading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default VideosLoading;
