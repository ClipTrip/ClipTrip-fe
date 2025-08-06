import AppBar from '@/components/common/AppBar';
import ButtonText from '@/components/common/ButtonText';
import Map from '@/components/common/Map';
import Navigation from '@/components/common/Navigation';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import BookmarkDetailListSheet from '@/components/pages/Places/[placesId]/BookmarkDetailListSheet';
import { usePatchBookmark } from '@/hooks/useBookmark';
import type { BookmarkDetailResponse } from '@/types/bookmarks';
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type placeListType = BookmarkDetailResponse['data']['placeList'];

const PlaceDetailPage = () => {
  const navigate = useNavigate();
  const { placeId } = useParams<{ placeId: string }>();

  const [places, setPlaces] = useState<placeListType>([]);
  const { mutateAsync, isPending: isPatchPending } = usePatchBookmark();

  const handleSave = async () => {
    if (isPatchPending || !placeId) return null;

    await mutateAsync({
      bookmarkId: +placeId,
      data: { placeInfoRequests: places },
    });
  };

  const handleDelete = useCallback((placeId: number) => {
    setPlaces((pre) => pre?.filter((place) => place.placeId !== placeId));
  }, []);

  const placeSetting = useCallback((placeList: placeListType) => {
    setPlaces(placeList);
  }, []);

  return (
    <>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={() => navigate(-1)}
        ThirdIcon={
          <ButtonText
            title='저장'
            onClick={handleSave}
          />
        }
      />

      <Map className='h-[calc(100dvh-156px)] [&>div:nth-child(3)]:hidden [&>div:nth-child(4)]:hidden [&>div:nth-child(6)]:hidden [&>div:nth-child(7)]:hidden' />

      <BookmarkDetailListSheet
        onDelete={handleDelete}
        onSetting={placeSetting}
      />

      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default PlaceDetailPage;
