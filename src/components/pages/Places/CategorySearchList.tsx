import FullPageLoading from '@/components/common/FullPageLoading';
import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import TripAddButton from '@/components/pages/Trips/[scheduleId]/TripAddButton';
import { usePlaceMarker } from '@/hooks/useMap';
import {
  useGetPlaceDetailKakaoId,
  useSearchCategoryPlaces,
} from '@/hooks/usePlace';
import type {
  CategoryCodeType,
  CategoryPlacesRequest,
  CategoryType,
  PlaceDetailKakaoIdRequest,
} from '@/types/place';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

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
  const [sp] = useSearchParams();
  const mode = sp.get('mode') as null | 'schedule';
  const { data: places } = useSearchCategoryPlaces(searchParams);
  const { mutateAsync, isPending } = useGetPlaceDetailKakaoId();

  const pin = PIN.find(
    ({ code }) => code === searchParams.categoryCode
  )?.category;

  const markerArr = places.map((place) => ({
    ...place,
  }));

  usePlaceMarker({ places: markerArr, pin });

  const handlePlaceDetail = async (param: PlaceDetailKakaoIdRequest) => {
    if (isPending) return null;

    await mutateAsync(param);
  };

  return (
    <>
      {isPending && <FullPageLoading />}
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
          LeftIcon={<TripAddButton place={place} />}
          title={place.placeName}
          description={t(place.type)}
          onClick={() => handlePlaceDetail(place)}
        />
      ))}
    </>
  );
};

export default CategorySearchList;
