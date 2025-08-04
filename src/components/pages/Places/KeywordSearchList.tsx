import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import { useSearchKeywordPlaces } from '@/hooks/usePlace';
import type { KeywordPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';

interface KeywordSearchListProps {
  searchParams: KeywordPlacesRequest;
}

const KeywordSearchList = ({ searchParams }: KeywordSearchListProps) => {
  const { t } = useTranslation('category');
  const { data: placesData } = useSearchKeywordPlaces(searchParams);
  const places = placesData?.data;
  return places?.map((place, idx) => (
    <ListItem
      key={idx}
      RightIcon={SaveIcon}
      title={place.placeName}
      description={t(place.type)}
    />
  ));
};

export default KeywordSearchList;
