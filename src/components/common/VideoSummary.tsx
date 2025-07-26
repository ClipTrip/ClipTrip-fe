import { ScrollArea } from "@/components/ui/scroll-area";

interface VideoSummaryProps {
  src?: string;
  alt?: string;
  url?: string;
  summary?: string;
}

const VideoSummary = ({ src, alt, url, summary }: VideoSummaryProps) => {
  return (
    <div className="bg-sy_container-neutral-white px-024 flex flex-col gap-008">
      <div className="py-008">
        <img
          src={src}
          alt={alt}
          className="rounded-020 object-cover overflow-hidden bg-sy_container-neutral-normal h-[175px] w-full"
        />
      </div>

      <span className="body_s text-sy_label-light">{url}</span>

      <ScrollArea className="h-[120px] body_m text-sy_label-normal">{summary}</ScrollArea>
    </div>
  );
};

export default VideoSummary;
