import AppBar from '@/components/common/AppBar';
import ButtonText from '@/components/common/ButtonText';
import Map from '@/components/common/Map';
import Navigation from '@/components/common/Navigation';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import BookmarkDetailListSheet from '@/components/pages/Places/[placesId]/BookmarkDetailListSheet';
import { useNavigate } from 'react-router-dom';

const PlaceDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={() => navigate(-1)}
        ThirdIcon={<ButtonText title='저장' />}
      />

      <Map className='h-[calc(100dvh-156px)] [&>div:nth-child(3)]:hidden [&>div:nth-child(4)]:hidden [&>div:nth-child(6)]:hidden [&>div:nth-child(7)]:hidden' />

      <BookmarkDetailListSheet />

      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default PlaceDetailPage;
