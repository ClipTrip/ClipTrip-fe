import AppBar from '@/components/common/AppBar';
import CloseIcon from '@/components/icons/system/CloseIcon';
import PlaceInfoSection from '@/components/pages/Places/[placeId]/PlaceInfoSection';
import Thumbnail from '@/components/pages/Places/[placeId]/Thumbnail';
import { useParams } from 'react-router-dom';

const PlaceCardPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  return (
    <div className='flex flex-col'>
      <AppBar LeadingIcon={CloseIcon} />

      <div className='gap-016 flex flex-col'>
        <Thumbnail />

        <PlaceInfoSection />
      </div>
    </div>
  );
};

export default PlaceCardPage;
