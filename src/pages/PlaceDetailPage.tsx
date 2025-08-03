import AppBar from '@/components/common/AppBar';
import ButtonText from '@/components/common/ButtonText';
import FullPageLoading from '@/components/common/FullPageLoading';
import Map from '@/components/common/Map';
import Menu from '@/components/common/Menu';
import Navigation from '@/components/common/Navigation';
import SectionTitle from '@/components/common/SectionTitle';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import MoreIcon from '@/components/icons/system/MoreIcon';
import BookmarkDetailList from '@/components/pages/Places/[placesId]/BookmarkDetailList';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useDeleteBookmark, useGetBookmarkDetail } from '@/hooks/useBookmark';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { useNavigate, useParams } from 'react-router-dom';

const pixel = 104;
const height = window.innerHeight;
const ratio = pixel / height;

const start = 0.8;

const end = Math.min(ratio + 0.1, 1);
const snapPoints: number[] = [];

for (let i = start; i >= end; i -= 0.05) {
  snapPoints.push(parseFloat(i.toFixed(2)));
}

const PlaceDetailPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const {
    data: bookmarkDetail,
    isError,
    isPending,
  } = useGetBookmarkDetail(placeId);
  const { mutateAsync, isPending: deleteIsPending } = useDeleteBookmark();
  const { t } = useTranslation(['appBar', 'textField', 'menu']);
  const navigate = useNavigate();
  const ref = useRef<SheetRef>(null);

  if (isPending || deleteIsPending) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <div>Error loading bookmark details.</div>;
  }

  const bookmarkId = bookmarkDetail.data.id;
  const placeList = bookmarkDetail.data.placeList;

  const handleDeleteBookmark = async () => {
    if (deleteIsPending) return null;

    await mutateAsync(bookmarkId);
    navigate('/places');
  };
  return (
    <>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={() => navigate(-1)}
        ThirdIcon={<ButtonText title='저장' />}
      />

      <Map className='h-[calc(100dvh-156px)] [&>div:nth-child(3)]:hidden [&>div:nth-child(4)]:hidden [&>div:nth-child(6)]:hidden [&>div:nth-child(7)]:hidden' />

      <Sheet
        ref={ref}
        isOpen
        onClose={() => {}}
        initialSnap={snapPoints.length - 2}
        snapPoints={snapPoints}
        className='mx-auto w-[360px]'
        style={{ zIndex: 30 }}
      >
        <Sheet.Container style={{ boxShadow: 'none' }}>
          <Sheet.Header className='flex h-12 items-center' />
          <Sheet.Content className='gap-024 pb-[104px]'>
            <div className={'flex flex-col items-end'}>
              <SectionTitle
                size='l'
                title={bookmarkDetail.data.name}
                RightIcon={
                  <DropdownMenu>
                    <DropdownMenuTrigger className='flex h-12 w-12 items-center justify-center'>
                      <MoreIcon className='size-6' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align='start'
                      className='p-0'
                    >
                      <DropdownMenuItem className='p-0'>
                        <Menu
                          menuItems={[
                            {
                              title: t('menu:menu_delete'),
                              variant: 'negative',
                            },
                          ]}
                          onMenuItemClick={handleDeleteBookmark}
                        />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
              />
            </div>

            <ScrollArea className='h-[calc(80dvh-250px)] w-full'>
              <BookmarkDetailList placeList={placeList} />
            </ScrollArea>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default PlaceDetailPage;
