import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import { useSearchCategoryPlaces } from '@/hooks/usePlace';
import type { CategoryPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';

interface CategorySearchListProps {
  searchParams: CategoryPlacesRequest;
}

const CategorySearchList = ({ searchParams }: CategorySearchListProps) => {
  const { t } = useTranslation('category');
  const { data: places } = useSearchCategoryPlaces(searchParams);

  return places?.map((place, idx) => (
    <ListItem
      key={idx}
      RightIcon={SaveIcon}
      title={place.placeName}
      description={t(place.type)}
    />
  ));
};

export default CategorySearchList;
