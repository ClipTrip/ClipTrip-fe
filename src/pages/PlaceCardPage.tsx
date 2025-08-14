import AppBar from '@/components/common/AppBar';
import CloseIcon from '@/components/icons/system/CloseIcon';
import PlaceInfoSection from '@/components/pages/Places/[placeId]/PlaceInfoSection';
import Thumbnail from '@/components/pages/Places/[placeId]/Thumbnail';
import { useGetPlaceDetailPlaceId } from '@/hooks/usePlace';
import { useNavigate, useParams } from 'react-router-dom';

const PlaceCardPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const {
    data: placeRes,
    isPending,
    error,
  } = useGetPlaceDetailPlaceId(placeId);
  const navigate = useNavigate();
  const placeData = placeRes?.data;

  return (
    <div className='flex flex-col'>
      <AppBar
        LeadingIcon={CloseIcon}
        onLeadingIconClick={() => navigate(-1)}
      />

      <div className='gap-016 flex flex-col'>
        {!error && (
          <>
            <Thumbnail
              src={placeData?.imageUrl}
              alt={placeData?.placeName}
            />

            <PlaceInfoSection
              data={placeData}
              isPending={isPending}
            />
          </>
        )}
        {error && error.message}
      </div>
    </div>
  );
};

export default PlaceCardPage;
