import AppBar from '@/components/common/AppBar';
import Headline from '@/components/common/Headline';
import Navigation from '@/components/common/Navigation';
import TripCardList from '@/components/pages/Trips/TripCardList';
import TripList from '@/components/pages/Trips/TripList';
import { useGetSchedules } from '@/hooks/useSchedule';

import { useTranslation } from 'react-i18next';

const TripsPage = () => {
  const { t } = useTranslation(['appBar', 'headline']);
  const { data, error, isPending } = useGetSchedules();

  return (
    <>
      <AppBar title={t('appBar_navi-02')} />

      <Headline
        title={t('headline:headline_title_trips')}
        textAlign='left'
        className='mb-7 mt-10 w-[250px] whitespace-pre-line'
      />

      <TripCardList
        data={data?.data}
        error={error}
        isPending={isPending}
      />

      <TripList
        data={data?.data}
        error={error}
        isPending={isPending}
      />

      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default TripsPage;
