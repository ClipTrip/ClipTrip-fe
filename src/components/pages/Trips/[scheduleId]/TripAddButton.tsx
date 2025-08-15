import AddCircleIcon from '@/components/icons/system/AddCircleIcon';
import { useGetScheduleDetail, usePatchSchedule } from '@/hooks/useSchedule';
import type {
  PatchSchedulePlace,
  PatchScheduleRequest,
} from '@/types/schedule';
import { useSearchParams } from 'react-router-dom';

interface TripAddButtonProps {
  place: PatchSchedulePlace;
}

const TripAddButton = ({ place }: TripAddButtonProps) => {
  const [sp] = useSearchParams();
  const mode = sp.get('mode') as null | 'schedule';
  const scheduleId = sp.get('scheduleId');

  const { data, isPending } = useGetScheduleDetail(scheduleId ?? undefined);
  const { mutateAsync: patchMutate, isPending: patchIsPending } =
    usePatchSchedule();

  const handleAdd = async () => {
    if (patchIsPending || !scheduleId || !data || isPending) return null;
    const placeList = data.data.placeList;

    const placeInfo: PatchScheduleRequest['placeInfoRequests'] = placeList.map(
      (v, i) => ({
        placeOrder: i,
        placeInfo: v,
      })
    );

    placeInfo.push({ placeOrder: placeInfo.length, placeInfo: place });
    await patchMutate({
      scheduleId: +scheduleId,
      data: { placeInfoRequests: placeInfo },
    });
  };

  return (
    mode === 'schedule' && (
      <button
        className='flex h-[54px] cursor-pointer justify-start pr-3 pt-[3px]'
        onClick={handleAdd}
      >
        <AddCircleIcon />
      </button>
    )
  );
};

export default TripAddButton;
