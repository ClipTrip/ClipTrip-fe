import ListItem from '@/components/common/ListItem';
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
import type { AddBookmarkProps } from '@/types/bookmarks';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useState, type ReactNode } from 'react';

interface AddBookmarkModalContentProps {
  data: AddBookmarkProps['data'];
}

const AddBookmarkModalContent = ({ data }: AddBookmarkModalContentProps) => {
  const { data: places } = useGetBookmark();

  return places?.data.map((place) => (
    <ListItem
      LeftIcon={
        <CheckButton
          data={data}
          bookmarkId={place.bookmarkId}
        />
      }
      title={place.name}
      key={place.bookmarkId}
    />
  ));
};

interface AddBookmarkModalProps {
  data: AddBookmarkProps['data'];
  children: ReactNode;
}

const AddBookmarkModal = ({ data, children }: AddBookmarkModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
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
          {open && <AddBookmarkModalContent data={data} />}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookmarkModal;
