import AppBar from '@/components/common/AppBar';
import FullPageLoading from '@/components/common/FullPageLoading';
import Map from '@/components/common/Map';
import Navigation from '@/components/common/Navigation';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import TripDetailListSheet from '@/components/pages/Trips/[scheduleId]/TripDetailListSheet';
import { useDrawPolyline } from '@/hooks/useMap';
import { useGetScheduleDetail } from '@/hooks/useSchedule';
import { useNavigate, useParams } from 'react-router-dom';

const TripDetailPage = () => {
  const navigate = useNavigate();
  const { scheduleId } = useParams<{ scheduleId: string }>();
  const {
    data: scheduleDetail,
    isPending,
    isError,
    error,
  } = useGetScheduleDetail(scheduleId);

  const placeList = scheduleDetail?.data.placeList;
  useDrawPolyline(placeList);

  return (
    <>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={() => navigate(-1)}
      />

      <Map className='h-[calc(100dvh-156px)]' />

      {isError && <div>{error.message}</div>}
      {isPending && <FullPageLoading />}
      {scheduleDetail && (
        <TripDetailListSheet
          scheduleId={scheduleDetail.data.scheduleId}
          scheduleDetail={scheduleDetail}
        />
      )}

      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default TripDetailPage;
