import ChipsAccessibility from '@/components/common/ChipsAccessibility';
import SectionTitle from '@/components/common/SectionTitle';
import SaveIcon from '@/components/icons/system/SaveIcon';
import AddBookmarkModal from '@/components/pages/Places/AddBookmarkModal';
import type { PlaceDetailResponse } from '@/types/place';
import { useTranslation } from 'react-i18next';

interface PlaceInfoHeaderProps {
  data: PlaceDetailResponse['data'];
}

const PlaceInfoHeader = ({ data }: PlaceInfoHeaderProps) => {
  const { t } = useTranslation('category');
  return (
    <header className='flex flex-col gap-8'>
      <SectionTitle
        size='l'
        title={data?.placeName}
        description={t(data.type)}
        RightIcon={
          <AddBookmarkModal data={{ ...data, placeOrder: 0 }}>
            <SaveIcon isActive={data.bookmarkedIdList.length > 0} />
          </AddBookmarkModal>
        }
      />

      {data.accessibilityFeatures.length > 0 && (
        <div className='w-[360px] pl-4'>
          <ChipsAccessibility
            accessibilityFeatures={data.accessibilityFeatures}
          />
        </div>
      )}
    </header>
  );
};

export default PlaceInfoHeader;
