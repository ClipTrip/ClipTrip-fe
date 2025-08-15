import ListItem from '@/components/common/ListItem';
import Menu from '@/components/common/Menu';
import MoreIcon from '@/components/icons/system/MoreIcon';
import PinNumberIcon from '@/components/icons/system/PinNumberIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import TripAddButton from '@/components/pages/Trips/[scheduleId]/TripAddButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePlaceCenter, usePlaceMarker } from '@/hooks/useMap';
import type { BookmarkDetailResponse } from '@/types/bookmarks';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

interface BookmarkDetailListProps {
  placeList: BookmarkDetailResponse['data']['placeList'];
  onDelete: (placeId: number) => void;
  onSetting: (placeList: BookmarkDetailResponse['data']['placeList']) => void;
}

const BookmarkDetailList = ({
  placeList,
  onDelete,
  onSetting,
}: BookmarkDetailListProps) => {
  const { t } = useTranslation(['menu']);
  const [selectedPlace, setSeletedPlace] =
    useState<BookmarkDetailResponse['data']['placeList'][number]>();
  const [open, setOpen] = useState(false);
  const [places, setPlaces] = useState(placeList);
  const [sp] = useSearchParams();
  const mode = sp.get('mode') as null | 'schedule';

  const markerArr = placeList?.map((place) => ({
    latitude: place.latitude,
    longitude: place.longitude,
  }));

  usePlaceCenter(
    markerArr[0]
      ? {
          latitude: markerArr[0].latitude,
          longitude: markerArr[0].longitude,
        }
      : undefined
  );

  usePlaceMarker({ places: markerArr, pin: places?.map(({ type }) => type) });

  const handleDelete = (placeId: number) => {
    setPlaces((pre) => pre.filter((place) => place.placeId !== placeId));
    onDelete(placeId);
  };

  useEffect(() => {
    setPlaces(placeList);
    onSetting(placeList);
  }, [placeList, onSetting]);

  return (
    <>
      {selectedPlace && (
        <AddBookmarkModal
          data={selectedPlace}
          open={open}
          setOpen={setOpen}
        />
      )}
      {places.map((place, idx) => (
        <Fragment key={place.placeId}>
          <AddBookmarkModal data={place}></AddBookmarkModal>
          <ListItem
            RightIcon={
              mode !== 'schedule' && (
                <DropdownMenu>
                  <DropdownMenuTrigger className='flex h-12 w-12 items-center justify-center'>
                    <MoreIcon className='text-sy_icon-neutral-light size-6' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align='start'
                    className='p-0'
                  >
                    <DropdownMenuItem className='p-0'>
                      <Menu>
                        <Menu.Item
                          title={t('menu:menu_addToAnotherList')}
                          onClick={() => {
                            setOpen(true);
                            setSeletedPlace(place);
                          }}
                        />
                        <Menu.Item
                          title={t('menu:menu_delete')}
                          variant='negative'
                          onClick={() => {
                            handleDelete(place.placeId);
                          }}
                        />
                      </Menu>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            title={place.placeName}
            description={place.roadAddress}
            LeftIcon={<TripAddButton place={place} />}
            Pin={
              mode !== 'schedule'
                ? PinNumberIcon.bind(null, { number: idx + 1 })
                : undefined
            }
          />
        </Fragment>
      ))}
    </>
  );
};

export default BookmarkDetailList;
