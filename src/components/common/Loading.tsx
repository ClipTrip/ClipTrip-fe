const Loading = () => {
  return (
    <div className="flex gap-[15px]">
      <div className="w-[13px] h-[13px] rounded-full bg-blue-50 bounce-1" />
      <div className="w-[13px] h-[13px] rounded-full bg-pink-50 bounce-2" />
      <div className="w-[13px] h-[13px] rounded-full bg-yellow-50 bounce-3" />
    </div>
  );
};

export default Loading;
