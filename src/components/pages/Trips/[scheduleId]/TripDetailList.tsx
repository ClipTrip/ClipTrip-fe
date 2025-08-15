import PinNumberIcon from '@/components/icons/system/PinNumberIcon';
import TripDetailListItem from '@/components/pages/Trips/[scheduleId]/TripDetailListItem';

import { usePlaceCenter, usePlaceMarker } from '@/hooks/useMap';
import type { GetScheduleDetailResponse } from '@/types/schedule';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TripDetailListProps {
  placeList: GetScheduleDetailResponse['data']['placeList'];
}

const TripDetailList = ({ placeList }: TripDetailListProps) => {
  const { t } = useTranslation('category');
  const [places, setPlaces] = useState(placeList);

  const markerArr = placeList?.map((place) => ({
    latitude: place.latitude,
    longitude: place.longitude,
  }));

  usePlaceCenter(
    markerArr[0]
      ? {
          latitude: markerArr[0].latitude,
          longitude: markerArr[0].longitude,
        }
      : undefined
  );

  usePlaceMarker({ places: markerArr, pin: 'number' });

  useEffect(() => {
    setPlaces(placeList);
  }, [placeList]);

  return (
    <>
      {places.map((place, idx) => (
        <Fragment key={place.placeId}>
          <TripDetailListItem
            title={place.placeName}
            category={t(place.type)}
            time={79}
            Pin={PinNumberIcon.bind(null, { number: idx + 1 })}
          />
        </Fragment>
      ))}
    </>
  );
};

export default TripDetailList;
