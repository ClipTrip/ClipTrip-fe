import ListItem_v2 from '@/components/common/ListItem_v2';
import LocationIcon from '@/components/icons/system/LocationIcon';
import PhoneIcon from '@/components/icons/system/PhoneIcon';
import PlaceInfoHeader from '@/components/pages/Places/[placeId]/PlaceInfoHeader';
import RecommendedHotels from '@/components/pages/Places/[placeId]/RecommendedHotels';
import { Skeleton } from '@/components/ui/skeleton';
import type { PlaceDetailResponse } from '@/types/place';

interface PlaceInfoSectionProps {
  data?: PlaceDetailResponse['data'];
  isPending: boolean;
}

const PlaceInfoSection = ({ data, isPending }: PlaceInfoSectionProps) => {
  return (
    <section className='gap-024 flex flex-col pb-6'>
      {!isPending && data && (
        <>
          <PlaceInfoHeader data={data} />
          <div>
            <ListItem_v2
              text={data.roadAddress}
              Icon={LocationIcon}
            />
            <ListItem_v2
              text={data.phone}
              Icon={PhoneIcon}
            />
          </div>

          <RecommendedHotels />
        </>
      )}
      {isPending && (
        <>
          <div className='flex flex-col gap-8'>
            <div>
              <Skeleton className='h-12 w-full' />
              <Skeleton className='h-6 w-full' />
            </div>

            <Skeleton className='h-10 w-full' />
          </div>

          <div>
            <Skeleton className='h-11 w-full' />
            <Skeleton className='h-11 w-full' />
          </div>

          <div>
            <div className='flex h-[70px] items-center'>
              <Skeleton className='h-7 w-full' />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PlaceInfoSection;
