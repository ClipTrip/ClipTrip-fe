import AppBar from '@/components/common/AppBar';
import Headline from '@/components/common/Headline';
import Navigation from '@/components/common/Navigation';
import TripCardList from '@/components/pages/Trips/TripCardList';
import TripList from '@/components/pages/Trips/TripList';

import { useTranslation } from 'react-i18next';

const TripsPage = () => {
  const { t } = useTranslation(['appBar', 'headline']);
  return (
    <>
      <AppBar title={t('appBar_navi-02')} />

      <Headline
        title={t('headline:headline_title_trips')}
        textAlign='left'
        className='mb-7 mt-10 w-[250px] whitespace-pre-line'
      />

      <TripCardList />

      <TripList />

      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default TripsPage;
