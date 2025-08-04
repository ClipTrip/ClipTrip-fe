import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import { usePlaceMarker } from '@/hooks/useMap';
import { useSearchCategoryPlaces } from '@/hooks/usePlace';
import type { CategoryPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';

interface CategorySearchListProps {
  searchParams: CategoryPlacesRequest;
}

const CategorySearchList = ({ searchParams }: CategorySearchListProps) => {
  const { t } = useTranslation('category');
  const { data: places } = useSearchCategoryPlaces(searchParams);

  const markerArr = places.map((place) => ({
    latitude: place.latitude,
    longitude: place.longitude,
  }));

  usePlaceMarker({ places: markerArr });

  return places?.map((place, idx) => (
    <ListItem
      key={idx}
      RightIcon={
        <AddBookmarkModal data={{ phoneNumber: place.phone, ...place }}>
          <SaveIcon />
        </AddBookmarkModal>
      }
      title={place.placeName}
      description={t(place.type)}
    />
  ));
};

export default CategorySearchList;
