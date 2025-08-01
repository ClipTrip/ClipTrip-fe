import AppBar from '@/components/common/AppBar';
import VideoSummary from '@/components/common/VideoSummary';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import VideoPlaceList from '@/components/pages/Home/VideoPlaceList';
import type { VideosResponse } from '@/types/video';
import { useTranslation } from 'react-i18next';

interface VideoDetailProps {
  data: VideosResponse['data'];
  onBack: () => void;
}

const VideoDetail = ({ data, onBack }: VideoDetailProps) => {
  const { t } = useTranslation(['appBar', 'headline']);

  return (
    <div className='gap-028 flex flex-col'>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={onBack}
        title={t('appBar_create')}
      />

      <div className='gap-028 flex flex-col'>
        <VideoSummary
          url={data.videoResponse.url}
          summary={data.videoResponse.summary}
        />
        <VideoPlaceList placeList={data.scheduleInfoResponse.placeList} />
      </div>
    </div>
  );
};

export default VideoDetail;
