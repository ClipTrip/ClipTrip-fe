import FullPageLoading from '@/components/common/FullPageLoading';
import ListItem from '@/components/common/ListItem';
import Menu from '@/components/common/Menu';
import MoreIcon from '@/components/icons/system/MoreIcon';
import AddRenameModal from '@/components/pages/Places/AddRenameModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteBookmark } from '@/hooks/useBookmark';
import { cn } from '@/lib/utils';
import type { BookmarkResponse } from '@/types/bookmarks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface BookmarkListProps {
  places: BookmarkResponse['data'];
}

const BookmarkList = ({ places }: BookmarkListProps) => {
  const { t } = useTranslation(['menu']);
  const { mutateAsync, isPending } = useDeleteBookmark();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<{
    id: number;
    name: string;
  }>();
  const [sp] = useSearchParams();
  const mode = sp.get('mode') as null | 'schedule';
  const scheduleId = sp.get('scheduleId');

  const tripSearchParam = `?mode=schedule&scheduleId=${scheduleId}`;

  const handleDeleteBookmark = async (bookmarkId: number) => {
    if (isPending) return null;

    await mutateAsync(bookmarkId);
  };

  return (
    <>
      {mode !== 'schedule' && open && selectedPlace && (
        <AddRenameModal
          defaultName={selectedPlace.name}
          open={open}
          onOpenChange={setOpen}
          bookmarkId={selectedPlace.id}
        />
      )}
      {isPending && <FullPageLoading />}
      {places.map(({ bookmarkId, name }) => (
        <ListItem
          className={cn(mode === 'schedule' && 'h-16')}
          key={bookmarkId}
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
                        title={t('menu_rename')}
                        onClick={() => {
                          setSelectedPlace({ name, id: bookmarkId });
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
            )
          }
          title={name}
          onClick={() => {
            navigate(
              `/places/bookmark/${bookmarkId}${mode === 'schedule' ? tripSearchParam : ''}`
            );
          }}
        />
      ))}
    </>
  );
};

export default BookmarkList;
