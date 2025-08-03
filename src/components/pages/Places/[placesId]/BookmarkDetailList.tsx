import ListItem from '@/components/common/ListItem';
import Menu from '@/components/common/Menu';
import MoreIcon from '@/components/icons/system/MoreIcon';
import PinNumberIcon from '@/components/icons/system/PinNumberIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { BookmarkDetailResponse } from '@/types/bookmarks';
import { useTranslation } from 'react-i18next';

interface BookmarkDetailListProps {
  placeList: BookmarkDetailResponse['data']['placeList'];
}

const BookmarkDetailList = ({ placeList }: BookmarkDetailListProps) => {
  const { t } = useTranslation(['menu']);

  return placeList.map((place, idx) => (
    <ListItem
      key={place.placeId}
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
              <Menu
                menuItems={[
                  { title: t('menu:menu_addToAnotherList') },
                  {
                    title: t('menu:menu_delete'),
                    variant: 'negative',
                  },
                ]}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
      title={place.placeName}
      description={place.roadAddress}
      Pin={PinNumberIcon.bind(null, { number: idx + 1 })}
    />
  ));
};

export default BookmarkDetailList;
