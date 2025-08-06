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
    latitude: searchParams.y,
    longitude: searchParams.x,
  });
  const places = placesData?.data;

  const markerArr = places?.map((place) => ({
    latitude: place.latitude,
    longitude: place.longitude,
  }));

  usePlaceMarker({ places: markerArr });

  return places?.map((place) => (
    <ListItem
      key={place.placeId}
      RightIcon={
        <AddBookmarkModal
          data={{ phoneNumber: '', type: 'LUGGAGE_STORAGE', ...place }}
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
