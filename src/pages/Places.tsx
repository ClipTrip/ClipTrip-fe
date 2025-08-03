import AppBar from '@/components/common/AppBar';
import ChipsCategory from '@/components/common/ChipsCategory';
import Navigation from '@/components/common/Navigation';
import PlaceSearch from '@/components/pages/Places/PlaceSearch';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ButtonChip from '@/components/common/ButtonChip';
import AddIcon from '@/components/icons/system/AddIcon';
import ChipCategory from '@/components/common/ChipCategory';
import LockerIcon from '@/components/icons/category/LockerIcon';
import { ScrollArea } from '@/components/ui/scroll-area';

import Map from '@/components/common/Map';
import { cn } from '@/lib/utils';
import { useCreateBookmark, useGetBookmark } from '@/hooks/useBookmark';
import BookmarkList from '@/components/pages/Places/BookmarkList';
import FullPageLoading from '@/components/common/FullPageLoading';

const pixel = 104;
const height = window.innerHeight;
const ratio = pixel / height;

const start = 0.6;

const end = Math.min(ratio + 0.1, 1);
const snapPoints: number[] = [];

const mapRatio = 154 / height;

for (let i = start; i >= end; i -= 0.05) {
  snapPoints.push(parseFloat(i.toFixed(2)));
}

const Places = () => {
  const { t } = useTranslation([
    'appBar',
    'sectionTitle',
    'buttonAction',
    'chip',
    'menu',
    'textField',
  ]);
  const ref = useRef<SheetRef>(null);
  const [showFindLocker, setShowFindLocker] = useState(true);
  const { data: places } = useGetBookmark();
  const { mutateAsync, isPending } = useCreateBookmark();

  const handleCreateBookmark = async () => {
    if (isPending) return null;

    await mutateAsync({
      bookmarkName: t('textField:textField_likesList'),
      description: '',
    });
    ref.current?.snapTo(0);
  };

  return (
    <>
      {isPending && <FullPageLoading />}
      <AppBar title={t('appBar_navi-03')} />

      <div className='pl-024 gap-012 flex w-[360px] flex-col'>
        <PlaceSearch />
        <ChipsCategory />
      </div>

      <Map className='h-[calc(100dvh-260px)] [&>div:nth-child(3)]:hidden [&>div:nth-child(4)]:hidden [&>div:nth-child(6)]:hidden [&>div:nth-child(7)]:hidden' />

      <Sheet
        ref={ref}
        isOpen
        onClose={() => {}}
        initialSnap={snapPoints.length - 2}
        snapPoints={snapPoints}
        className='mx-auto w-[360px]'
        style={{ zIndex: 30 }}
        onSnap={(snapIndex) => {
          if (snapPoints[snapIndex] + mapRatio > 1) {
            setShowFindLocker(false);
          } else {
            setShowFindLocker(true);
          }
        }}
      >
        <Sheet.Container style={{ boxShadow: 'none' }}>
          <Sheet.Header className='flex h-12 items-center' />
          <Sheet.Content className={cn('gap-016 pb-[104px]')}>
            <div className={'flex flex-col items-end'}>
              <SectionTitle
                size='l'
                title={t('sectionTitle:sectionTitle_likesList')}
              />
              <ButtonChip
                className='mr-6'
                Icon={AddIcon}
                label={t('buttonAction:button-action_addLikesList')}
                onClick={handleCreateBookmark}
              />
            </div>

            <ScrollArea className={cn('h-[calc(60dvh-270px)] w-full')}>
              {places && <BookmarkList places={places.data} />}
            </ScrollArea>

            {showFindLocker && (
              <div className='absolute -top-[94px] right-4'>
                <ChipCategory
                  Icon={LockerIcon}
                  color='carrier'
                  label={t('chip:category-07')}
                />
              </div>
            )}
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      <Navigation className='absolute bottom-0 z-50' />
    </>
  );
};

export default Places;
