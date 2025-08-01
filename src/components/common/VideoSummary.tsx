import { ScrollArea } from '@/components/ui/scroll-area';

interface VideoSummaryProps {
  src?: string;
  alt?: string;
  url?: string;
  summary?: string;
}

const VideoSummary = ({ src, alt, url, summary }: VideoSummaryProps) => {
  return (
    <div className='bg-sy_container-neutral-white px-024 gap-008 flex flex-col'>
      <div className='py-008'>
        <img
          src={src}
          alt={alt}
          className='rounded-020 bg-sy_container-neutral-normal h-[175px] w-full overflow-hidden object-cover'
        />
      </div>

      <span className='body_s text-sy_label-light'>{url}</span>

      <ScrollArea className='body_m text-sy_label-normal h-[120px]'>
        {summary}
      </ScrollArea>
    </div>
  );
};

export default VideoSummary;
