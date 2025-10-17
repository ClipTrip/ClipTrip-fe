import ListItem from '@/components/common/ListItem';
import Menu from '@/components/common/Menu';
import AddIcon from '@/components/icons/system/AddIcon';
import MoreIcon from '@/components/icons/system/MoreIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { useAddSchedule, useDeleteSchedule } from '@/hooks/useSchedule';
import type { ApiFailResponse } from '@/types/api';
import type { GetSchedulesResponse } from '@/types/schedule';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface TripListProps {
  data?: GetSchedulesResponse['data'];
  isPending: boolean;
  error: ApiFailResponse | null;
}

const TripList = ({ data, isPending, error }: TripListProps) => {
  const { t } = useTranslation(['menu', 'sectionTitle']);
  const { mutateAsync, isPending: deleteIsPending } = useDeleteSchedule();
  const { mutateAsync: addMutate, isPending: addIsPending } = useAddSchedule();

  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    if (deleteIsPending) return null;

    await mutateAsync(id);
  };

  const handleAdd = async () => {
    if (addIsPending) return null;

    await addMutate();
  };

  return (
    <div className='pb-[104px]'>
      <header className='notranslate px-012 flex h-[69px] items-center justify-between'>
        <div className='gap-004 flex h-12 items-center'>
          <h2 className='pl-012 title_l text-sy_label-normal'>
            {t('sectionTitle:sectionTitle_tripList')}
          </h2>
          <span className='title_m text-sy_label-light'>({data?.length})</span>
        </div>

        <button
          className='flex size-12 cursor-pointer items-center justify-center'
          onClick={handleAdd}
        >
          <AddIcon className='size-6' />
        </button>
      </header>

      {data?.map((v) => (
        <ListItem
          className='notranslate'
          key={v.scheduleId}
          title={v.scheduleName}
          description={v.description}
          RightIcon={
            <DropdownMenu>
              <DropdownMenuTrigger className='flex h-12 w-12 cursor-pointer items-center justify-center'>
                <MoreIcon className='text-sy_icon-neutral-light size-6' />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='start'
                className='p-0'
              >
                <DropdownMenuItem className='p-0'>
                  <Menu>
                    <Menu.Item
                      title={t('menu_delete')}
                      variant='negative'
                      onClick={() => handleDelete(v.scheduleId)}
                    />
                  </Menu>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          onClick={() => navigate(`/trips/${v.scheduleId}`)}
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
