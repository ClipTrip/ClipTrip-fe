import ListItem from '@/components/common/ListItem';
import SaveIcon from '@/components/icons/system/SaveIcon';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSearchKeywordPlaces } from '@/hooks/usePlace';
import { cn } from '@/lib/utils';
import type { KeywordPlacesRequest } from '@/types/place';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Sheet, type SheetRef } from 'react-modal-sheet';

const pixel = 104;
const height = window.innerHeight;
const ratio = pixel / height;

const start = 0.6;

const end = Math.min(ratio + 0.1, 1);
const snapPoints: number[] = [];

for (let i = start; i >= end; i -= 0.05) {
  snapPoints.push(parseFloat(i.toFixed(2)));
}

interface SearchSheetProps {
  searchParams: KeywordPlacesRequest;
}

const SearchSheet = ({ searchParams }: SearchSheetProps) => {
  const { t } = useTranslation('category');
  const ref = useRef<SheetRef>(null);
  const { data: placesData } = useSearchKeywordPlaces(searchParams);
  const places = placesData?.data;

  return (
    <>
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
          <Sheet.Content className={cn('gap-016 pb-[104px]')}>
            <ScrollArea className={cn('h-[calc(60dvh-70px)] w-full')}>
              {places?.map((place) => (
                <ListItem
                  key={place.placeId}
                  RightIcon={SaveIcon}
                  title={place.placeName}
                  description={t(place.type)}
                />
              ))}
            </ScrollArea>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default SearchSheet;
