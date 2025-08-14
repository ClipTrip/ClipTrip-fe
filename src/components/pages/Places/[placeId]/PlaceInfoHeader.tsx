import ChipsAccessibility from '@/components/common/ChipsAccessibility';
import SectionTitle from '@/components/common/SectionTitle';
import SaveIcon from '@/components/icons/system/SaveIcon';

const PlaceInfoHeader = () => {
  return (
    <header className='flex flex-col gap-8'>
      <SectionTitle
        size='l'
        title='장소 이름'
        description='음식점'
        RightIcon={SaveIcon}
      />

      <div className='w-[360px] pl-4'>
        <ChipsAccessibility />
      </div>
    </header>
  );
};

export default PlaceInfoHeader;
