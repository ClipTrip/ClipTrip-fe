import ListItem from '@/components/common/ListItem';
import AddCircleIcon from '@/components/icons/system/AddCircleIcon';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import { usePlaceMarker } from '@/hooks/useMap';
import { useSearchKeywordPlaces } from '@/hooks/usePlace';
import type { KeywordPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

interface KeywordSearchListProps {
  searchParams: KeywordPlacesRequest;
}

const KeywordSearchList = ({ searchParams }: KeywordSearchListProps) => {
  const { t } = useTranslation('category');
  const [sp] = useSearchParams();
  const { data: placesData } = useSearchKeywordPlaces(searchParams);
  const places = placesData?.data;
  const mode = sp.get('mode') as null | 'schedule';

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
            mode !== 'schedule' && (
              <AddBookmarkModal data={{ ...place }}>
                <SaveIcon isActive={place.bookmarkedIdList.length > 0} />
              </AddBookmarkModal>
            )
          }
          LeftIcon={
            mode === 'schedule' && (
              <button className='flex h-[54px] cursor-pointer justify-start pr-3 pt-[3px]'>
                <AddCircleIcon />
              </button>
            )
          }
          title={place.placeName}
          description={t(place.type)}
        />
      ))}
    </>
  );
};

export default KeywordSearchList;
