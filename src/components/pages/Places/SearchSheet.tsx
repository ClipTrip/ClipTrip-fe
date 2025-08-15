import CategorySearchList from '@/components/pages/Places/CategorySearchList';
import KeywordSearchList from '@/components/pages/Places/KeywordSearchList';
import LuggageSearchList from '@/components/pages/Places/LuggageSearchList';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type {
  CategoryPlacesRequest,
  KeywordPlacesRequest,
} from '@/types/place';
import { useRef } from 'react';
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
  searchParams: KeywordPlacesRequest | CategoryPlacesRequest;
}

const SearchSheet = ({ searchParams }: SearchSheetProps) => {
  const ref = useRef<SheetRef>(null);

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
          <Sheet.Content
            className={cn('gap-016 pb-[104px]')}
            disableDrag
          >
            <ScrollArea className={cn('h-[calc(60dvh-70px)] w-full')}>
              {'query' in searchParams && (
                <KeywordSearchList searchParams={searchParams} />
              )}
              {'categoryCode' in searchParams
                && searchParams.categoryCode === 'LS1' && (
                  <LuggageSearchList searchParams={searchParams} />
                )}
              {'categoryCode' in searchParams
                && searchParams.categoryCode !== 'LS1' && (
                  <CategorySearchList searchParams={searchParams} />
                )}
            </ScrollArea>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default SearchSheet;
