import TripCard from '@/components/pages/Trips/TripCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const TripCardList = () => {
  return (
    <div className='mb-4 w-[360px] pl-4'>
      <Carousel className='w-full'>
        <CarouselContent className='pl-3'>
          {[1, 2, 3, 4, 5].map((v) => (
            <CarouselItem
              key={v}
              className='pl-008 basis-auto'
            >
              <TripCard />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TripCardList;
