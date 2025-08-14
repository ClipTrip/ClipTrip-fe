import ListItem from '@/components/common/ListItem';
import AddIcon from '@/components/icons/system/AddIcon';
import MoreIcon from '@/components/icons/system/MoreIcon';
import { Skeleton } from '@/components/ui/skeleton';
import type { ApiFailResponse } from '@/types/api';
import type { GetSchedulesResponse } from '@/types/schedule';

interface TripListProps {
  data?: GetSchedulesResponse['data'];
  isPending: boolean;
  error: ApiFailResponse | null;
}

const TripList = ({ data, isPending, error }: TripListProps) => {
  return (
    <div className='pb-[104px]'>
      <header className='px-012 flex h-[69px] items-center justify-between'>
        <div className='gap-004 flex h-12 items-center'>
          <h2 className='pl-012 title_l text-sy_label-normal'>내 일정</h2>
          <span className='title_m text-sy_label-light'>({data?.length})</span>
        </div>

        <button className='flex size-12 cursor-pointer items-center justify-center'>
          <AddIcon className='size-6' />
        </button>
      </header>

      {data?.map((v) => (
        <ListItem
          key={v.scheduleId}
          title={v.scheduleName}
          description={v.description}
          RightIcon={MoreIcon}
        />
      ))}

      {isPending
        && [1, 2, 3].map((v) => (
          <div
            className='py-008 pr-012 pl-024 gap-004 flex flex-col'
            key={v}
          >
            <Skeleton className='h-[26px] w-full' />
            <Skeleton className='h-[24px] w-full' />
          </div>
        ))}

      {error && <ListItem title={error.message} />}
    </div>
  );
};

export default TripList;
