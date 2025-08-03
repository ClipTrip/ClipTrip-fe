import FullPageLoading from '@/components/common/FullPageLoading';
import ListItem from '@/components/common/ListItem';
import Menu from '@/components/common/Menu';
import MoreIcon from '@/components/icons/system/MoreIcon';
import RenameModal from '@/components/pages/Places/RenameModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteBookmark } from '@/hooks/useBookmark';
import type { BookmarkResponse } from '@/types/bookmarks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface BookmarkListProps {
  places: BookmarkResponse['data'];
}

const BookmarkList = ({ places }: BookmarkListProps) => {
  const { t } = useTranslation(['menu']);
  const { mutateAsync, isPending } = useDeleteBookmark();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [defaultName, setDefaultName] = useState('');

  const handleDeleteBookmark = async (bookmarkId: number) => {
    if (isPending) return null;

    await mutateAsync(bookmarkId);
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
      {isPending && <FullPageLoading />}
      {places.map(({ bookmarkId, name }) => (
        <ListItem
          key={bookmarkId}
          RightIcon={
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
                      title={t('menu_rename')}
                      onClick={() => {
                        setDefaultName(name);
                        setOpen(true);
                      }}
                    />
                    <Menu.Item
                      title={t('menu_delete')}
                      variant='negative'
                      onClick={() => {
                        handleDeleteBookmark(bookmarkId);
                      }}
                    />
                  </Menu>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          title={name}
          onClick={() => {
            navigate(`/places/${bookmarkId}`);
          }}
        />
      ))}
    </>
  );
};

export default BookmarkList;
