import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import TripAddButton from '@/components/pages/Trips/[scheduleId]/TripAddButton';
import { usePlaceMarker } from '@/hooks/useMap';
import { useSearchLuggagePlaces } from '@/hooks/usePlace';
import type { CategoryPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface LuggageSearchListProps {
  searchParams: CategoryPlacesRequest;
}

const LuggageSearchList = ({ searchParams }: LuggageSearchListProps) => {
  const { t } = useTranslation('category');
  const [sp] = useSearchParams();
  const { data: placesData } = useSearchLuggagePlaces({
    ...searchParams,
  });
  const navigate = useNavigate();
  const mode = sp.get('mode') as null | 'schedule';
  const places = placesData?.data;

  const markerArr = places?.map((place) => ({
    ...place,
  }));

  usePlaceMarker({ places: markerArr, pin: 'LUGGAGE_STORAGE' });

  return places?.map((place) => (
    <ListItem
      key={place.placeId}
      RightIcon={
        mode !== 'schedule' && (
          <AddBookmarkModal
            data={{
              ...place,
              type: place.type || 'LUGGAGE_STORAGE',
              kakaoPlaceId: '',
            }}
          >
            <SaveIcon isActive={place.bookmarkedIdList.length > 0} />
          </AddBookmarkModal>
        )
      }
      LeftIcon={<TripAddButton place={{ ...place, kakaoPlaceId: '' }} />}
      title={place.placeName}
      description={t('LUGGAGE_STORAGE')}
      onClick={() => navigate(`/places/${place.placeId}`)}
    />
  ));
};

export default LuggageSearchList;
