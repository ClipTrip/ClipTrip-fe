import ListItem from '@/components/common/ListItem';
import AddIcon from '@/components/icons/system/AddIcon';
import AddRenameModal from '@/components/pages/Places/AddRenameModal';
import CheckButton from '@/components/pages/Places/CheckButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useGetBookmark } from '@/hooks/useBookmark';
import type {
  LuggagePlaces,
  PlaceList,
  SearchResponsePlace,
} from '@/types/place';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface AddBookmarkModalContentProps {
  data: SearchResponsePlace | LuggagePlaces | PlaceList;
}

const AddBookmarkModalContent = ({ data }: AddBookmarkModalContentProps) => {
  const { data: places } = useGetBookmark();
  return places?.data.map((place) => (
    <ListItem
      LeftIcon={
        <CheckButton
          data={data}
          bookmarkId={place.bookmarkId}
          defaultCheck={data?.bookmarkedIdList?.includes(place.bookmarkId)}
          placeId={'placeId' in data ? data.placeId : undefined}
        />
      }
      title={place.name}
      key={place.bookmarkId}
    />
  ));
};

interface AddBookmarkModalProps {
  open?: boolean;
  data: SearchResponsePlace | LuggagePlaces | PlaceList;
  children?: ReactNode;
  setOpen?: (open: boolean) => void;
}

const AddBookmarkModal = ({
  open,
  data,
  children,
  setOpen,
}: AddBookmarkModalProps) => {
  const [ModalOpen, setModalOpen] = useState(open || false);
  const [mode, setMode] = useState<'addPlace' | 'addBookmark'>('addPlace');
  const { t } = useTranslation('buttonAction');

  const handleOpen = (open: boolean) => {
    setOpen?.(open);
    setModalOpen(open);
  };

  const handleAddBookmarkOpen = (open: boolean) => {
    if (!open) {
      setMode('addPlace');
    }
  };
  return (
    <>
      {mode === 'addPlace' && (
        <Dialog
          open={open === undefined ? ModalOpen : open}
          onOpenChange={handleOpen}
        >
          <DialogTrigger>{children}</DialogTrigger>
          <DialogContent className='rounded-020 py-012 gap-004 flex w-[314px] flex-col px-0'>
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>Add Bookmark Modal</DialogTitle>
                <DialogDescription>Add Bookmark</DialogDescription>
              </DialogHeader>
            </VisuallyHidden>
            <ScrollArea className='h-[260px]'>
              {(ModalOpen || open) && <AddBookmarkModalContent data={data} />}
            </ScrollArea>
            <ListItem
              title={t('button-action_addLikesList')}
              LeftIcon={
                <button
                  onClick={() => setMode('addBookmark')}
                  className='flex size-12 cursor-pointer items-center justify-center'
                >
                  <AddIcon className='size-6' />
                </button>
              }
              onClick={() => setMode('addBookmark')}
              className='py-004'
            />
          </DialogContent>
        </Dialog>
      )}
      {mode === 'addBookmark' && (
        <AddRenameModal
          open={mode === 'addBookmark'}
          onOpenChange={handleAddBookmarkOpen}
          defaultName=''
          mode='add'
        />
      )}
    </>
  );
};

export default AddBookmarkModal;
