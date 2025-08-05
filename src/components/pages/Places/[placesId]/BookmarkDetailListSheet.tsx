import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Menu from '@/components/common/Menu';
import SectionTitle from '@/components/common/SectionTitle';
import MoreIcon from '@/components/icons/system/MoreIcon';
import BookmarkDetailList from '@/components/pages/Places/[placesId]/BookmarkDetailList';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import RenameModal from '@/components/pages/Places/RenameModal';
import FullPageLoading from '@/components/common/FullPageLoading';
import { useDeleteBookmark, useGetBookmarkDetail } from '@/hooks/useBookmark';
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

const BookmarkDetailListSheet = () => {
  const { t } = useTranslation(['appBar', 'textField', 'menu']);
  const ref = useRef<SheetRef>(null);
  const [open, setOpen] = useState(false);
  const [defaultName, setDefaultName] = useState('');
  const { placeId } = useParams<{ placeId: string }>();
  const {
    data: bookmarkDetail,
    isError,
    isPending,
  } = useGetBookmarkDetail(placeId);
  const { mutateAsync, isPending: deleteIsPending } = useDeleteBookmark();
  const navigate = useNavigate();

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
      {open && (
        <RenameModal
          defaultName={defaultName}
          open={open}
          onOpenChange={setOpen}
        />
      )}
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
                        <Menu>
                          <Menu.Item
                            title={t('menu:menu_rename')}
                            onClick={() => {
                              setDefaultName(bookmarkDetail.data.name);
                              setOpen(true);
                            }}
                          />
                          <Menu.Item
                            title={t('menu:menu_delete')}
                            variant='negative'
                            onClick={handleDeleteBookmark}
                          />
                        </Menu>
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
    </>
  );
};

export default BookmarkDetailListSheet;
