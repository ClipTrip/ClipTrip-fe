import TripCard from '@/components/pages/Trips/TripCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { useAddSchedule } from '@/hooks/useSchedule';
import type { ApiFailResponse } from '@/types/api';
import type { GetSchedulesResponse } from '@/types/schedule';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface TripCardListProps {
  data?: GetSchedulesResponse['data'];
  isPending: boolean;
  error: ApiFailResponse | null;
}

const TripCardList = ({ data, error, isPending }: TripCardListProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation('sectionTitle');
  const { mutateAsync: addMutate, isPending: addIsPending } = useAddSchedule();

  const handleAdd = async () => {
    if (addIsPending) return null;

    await addMutate();
  };

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
                  size={v.schedulePlaceCount || data.length}
                  title={v.scheduleName}
                  description={v.description}
                />
              </button>
            </CarouselItem>
          ))}
          {!isPending && data?.length === 0 && (
            <button
              className='cursor-pointer text-left'
              onClick={handleAdd}
            >
              <TripCard title={t('sectionTitle_add_schedule')} />
            </button>
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
