import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import { usePlaceMarker } from '@/hooks/useMap';
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

  const markerArr = places?.map((place) => ({
    ...place,
  }));

  usePlaceMarker({ places: markerArr, pin: places?.map(({ type }) => type) });

  return (
    <>
      {places?.map((place, idx) => (
        <ListItem
          key={idx}
          RightIcon={
            <AddBookmarkModal data={{ ...place }}>
              <SaveIcon />
            </AddBookmarkModal>
          }
          title={place.placeName}
          description={t(place.type)}
        />
      ))}
    </>
  );
};

export default KeywordSearchList;
