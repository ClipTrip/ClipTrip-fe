import ListItem from '@/components/common/ListItem';
import AddCircleIcon from '@/components/icons/system/AddCircleIcon';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import { usePlaceMarker } from '@/hooks/useMap';
import { useSearchLuggagePlaces } from '@/hooks/usePlace';
import type { CategoryPlacesRequest } from '@/types/place';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

interface LuggageSearchListProps {
  searchParams: CategoryPlacesRequest;
}

const LuggageSearchList = ({ searchParams }: LuggageSearchListProps) => {
  const { t } = useTranslation('category');
  const [sp] = useSearchParams();
  const { data: placesData } = useSearchLuggagePlaces({
    ...searchParams,
  });
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
      LeftIcon={
        mode === 'schedule' && (
          <button className='flex h-[54px] cursor-pointer justify-start pr-3 pt-[3px]'>
            <AddCircleIcon />
          </button>
        )
      }
      title={place.placeName}
      description={t('LUGGAGE_STORAGE')}
    />
  ));
};

export default LuggageSearchList;
