interface ThumbnailProps {
  src?: string;
  alt?: string;
}

const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  return (
    <div className='py-008'>
      <img
        src={src}
        alt={alt}
        className='bg-sy_container-neutral-normal h-[202px] w-full overflow-hidden rounded-[5px] object-cover'
      />
    </div>
  );
};

export default Thumbnail;
