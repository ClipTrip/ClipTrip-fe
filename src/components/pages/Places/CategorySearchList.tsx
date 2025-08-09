import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import { usePlaceMarker } from '@/hooks/useMap';
import { useSearchCategoryPlaces } from '@/hooks/usePlace';
import type {
  CategoryCodeType,
  CategoryPlacesRequest,
  CategoryType,
} from '@/types/place';
import { useTranslation } from 'react-i18next';

interface CategorySearchListProps {
  searchParams: CategoryPlacesRequest;
}

const PIN: { category: CategoryType; code: CategoryCodeType | 'CT1,AT4' }[] = [
  { category: 'RESTAURANT', code: 'FD6' },
  { category: 'CAFE', code: 'CE7' },
  { category: 'ACCOMMODATION', code: 'AD5' },
  { category: 'CULTURAL_FACILITY', code: 'CT1,AT4' },
  { category: 'PUBLIC_INSTITUTION', code: 'PO3' },
  { category: 'PARKING_LOT', code: 'PK6' },
  { category: 'LUGGAGE_STORAGE', code: 'LS1' },
];

const CategorySearchList = ({ searchParams }: CategorySearchListProps) => {
  const { t } = useTranslation('category');
  const { data: places } = useSearchCategoryPlaces(searchParams);
  const pin = PIN.find(
    ({ code }) => code === searchParams.categoryCode
  )?.category;

  const markerArr = places.map((place) => ({
    ...place,
  }));

  usePlaceMarker({ places: markerArr, pin });

  return places?.map((place, idx) => (
    <ListItem
      key={idx}
      RightIcon={
        <AddBookmarkModal data={{ ...place }}>
          <SaveIcon isActive={place.bookmarkedIdList.length > 0} />
        </AddBookmarkModal>
      }
      title={place.placeName}
      description={t(place.type)}
    />
  ));
};

export default CategorySearchList;
