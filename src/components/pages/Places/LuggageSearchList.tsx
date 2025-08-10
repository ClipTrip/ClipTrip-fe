import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import { usePlaceMarker } from '@/hooks/useMap';
import { useSearchLuggagePlaces } from '@/hooks/usePlace';
import type { CategoryPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';

interface LuggageSearchListProps {
  searchParams: CategoryPlacesRequest;
}

const LuggageSearchList = ({ searchParams }: LuggageSearchListProps) => {
  const { t } = useTranslation('category');
  const { data: placesData } = useSearchLuggagePlaces({
    ...searchParams,
  });
  const places = placesData?.data;

  const markerArr = places?.map((place) => ({
    ...place,
  }));

  usePlaceMarker({ places: markerArr, pin: 'LUGGAGE_STORAGE' });

  return places?.map((place) => (
    <ListItem
      key={place.placeId}
      RightIcon={
        <AddBookmarkModal
          data={{
            ...place,
            type: place.type || 'LUGGAGE_STORAGE',
            kakaoPlaceId: place.placeId.toString(),
          }}
        >
          <SaveIcon />
        </AddBookmarkModal>
      }
      title={place.placeName}
      description={t('LUGGAGE_STORAGE')}
    />
  ));
};

export default LuggageSearchList;
