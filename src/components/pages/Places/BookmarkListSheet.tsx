import ButtonChip from '@/components/common/ButtonChip';
import FullPageLoading from '@/components/common/FullPageLoading';
import SectionTitle from '@/components/common/SectionTitle';
import AddIcon from '@/components/icons/system/AddIcon';
import BookmarkList from '@/components/pages/Places/BookmarkList';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCreateBookmark, useGetBookmark } from '@/hooks/useBookmark';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { useSearchParams } from 'react-router-dom';

const pixel = 104;
const height = window.innerHeight;
const ratio = pixel / height;

const start = 0.6;

const end = Math.min(ratio + 0.1, 1);
const snapPoints: number[] = [];

for (let i = start; i >= end; i -= 0.05) {
  snapPoints.push(parseFloat(i.toFixed(2)));
}

const BookmarkListSheet = () => {
  const { t } = useTranslation([
    'sectionTitle',
    'buttonAction',
    'chip',
    'menu',
    'textField',
  ]);
  const ref = useRef<SheetRef>(null);
  const { data: places } = useGetBookmark();
  const { mutateAsync, isPending } = useCreateBookmark();
  const [sp] = useSearchParams();
  const mode = sp.get('mode') as null | 'schedule';

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
          <Sheet.Content
            className={cn('gap-016 pb-[104px]')}
            disableDrag
          >
            <div className={'flex flex-col items-end'}>
              <SectionTitle
                size='l'
                title={t('sectionTitle:sectionTitle_likesList')}
              />
              {mode !== 'schedule' && (
                <ButtonChip
                  className='mr-6'
                  Icon={AddIcon}
                  label={t('buttonAction:button-action_addLikesList')}
                  onClick={handleCreateBookmark}
                />
              )}
            </div>

            <ScrollArea className={cn('h-[calc(60dvh-270px)] w-full')}>
              {places && <BookmarkList places={places.data} />}
            </ScrollArea>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default BookmarkListSheet;
