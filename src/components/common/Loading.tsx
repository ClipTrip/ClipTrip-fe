const Loading = () => {
  return (
    <div className='flex gap-[15px]'>
      <div className='bounce-1 h-[13px] w-[13px] rounded-full bg-blue-50' />
      <div className='bounce-2 h-[13px] w-[13px] rounded-full bg-pink-50' />
      <div className='bounce-3 h-[13px] w-[13px] rounded-full bg-yellow-50' />
    </div>
  );
};

export default Loading;
