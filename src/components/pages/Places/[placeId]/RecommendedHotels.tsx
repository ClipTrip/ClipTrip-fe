import SectionTitle from '@/components/common/SectionTitle';
import RecommendedHotelCard from '@/components/pages/Places/[placeId]/RecommendedHotelCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useTranslation } from 'react-i18next';

const RecommendedHotels = () => {
  const { t } = useTranslation('sectionTitle');
  return (
    <div className='gap-008 flex flex-col'>
      <header className='flex h-[70px] items-center'>
        <SectionTitle title={t('sectionTitle_stays')} />
      </header>

      <div className='w-[360px] pl-4'>
        <Carousel className='w-full'>
          <CarouselContent className='pl-4'>
            {[1, 2, 3, 4, 5].map((val) => (
              <CarouselItem
                key={val}
                className='pl-008 basis-auto'
              >
                <RecommendedHotelCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default RecommendedHotels;
