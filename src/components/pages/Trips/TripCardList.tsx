import TripCard from '@/components/pages/Trips/TripCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import type { ApiFailResponse } from '@/types/api';
import type { GetSchedulesResponse } from '@/types/schedule';
import { useNavigate } from 'react-router-dom';

interface TripCardListProps {
  data?: GetSchedulesResponse['data'];
  isPending: boolean;
  error: ApiFailResponse | null;
}

const TripCardList = ({ data, error, isPending }: TripCardListProps) => {
  const navigate = useNavigate();

  return (
    <div className='mb-4 w-[360px] pl-4'>
      <Carousel className='w-full'>
        <CarouselContent className='pl-3'>
          {data?.map((v) => (
            <CarouselItem
              key={v.scheduleId}
              className='pl-008 basis-auto'
            >
              <button
                className='cursor-pointer text-left'
                onClick={() => navigate(`/trips/${v.scheduleId}`)}
              >
                <TripCard
                  size={data.length}
                  title={v.scheduleName}
                  description={v.description}
                />
              </button>
            </CarouselItem>
          ))}
          {!isPending && data?.length === 0 && (
            <TripCard title='일정을 추가해보세요' />
          )}
          {isPending
            && [1, 2, 3, 4].map((v) => (
              <CarouselItem
                key={v}
                className='pl-008 basis-auto'
              >
                <Skeleton className='rounded-020 h-[254px] w-[194px]' />
              </CarouselItem>
            ))}
          {error && (
            <CarouselItem className='pl-008 basis-auto'>
              <div className='rounded-020 h-[254px] w-[194px]'>
                {error.message}
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TripCardList;
