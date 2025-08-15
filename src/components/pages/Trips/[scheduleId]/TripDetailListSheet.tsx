import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Menu from '@/components/common/Menu';
import SectionTitle from '@/components/common/SectionTitle';
import MoreIcon from '@/components/icons/system/MoreIcon';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useDeleteSchedule,
  useGetScheduleDetail,
  usePatchSchedule,
} from '@/hooks/useSchedule';
import FullPageLoading from '@/components/common/FullPageLoading';
import TripDetailList from '@/components/pages/Trips/[scheduleId]/TripDetailList';
import ButtonChip from '@/components/common/ButtonChip';
import AddIcon from '@/components/icons/system/AddIcon';
import RenameModal from '@/components/pages/Trips/RenameModal';
import CalendarIcon from '@/components/icons/system/CalendarIcon';
import type { DateRange } from 'react-day-picker';
import Calendar from '@/components/common/Calendar';
import { formatDateRange } from '@/utils/format';
import type { GetScheduleDetailResponse } from '@/types/schedule';

const pixel = 104;
const height = window.innerHeight;
const ratio = pixel / height;

const start = 0.8;

const end = Math.min(ratio + 0.1, 1);
const snapPoints: number[] = [];

for (let i = start; i >= end; i -= 0.05) {
  snapPoints.push(parseFloat(i.toFixed(2)));
}

const TripDetailListSheet = () => {
  const { t } = useTranslation(['appBar', 'textField', 'menu', 'buttonChip']);
  const ref = useRef<SheetRef>(null);
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [range, setRange] = useState<DateRange>();
  const [defaultName, setDefaultName] = useState('');
  const { scheduleId: id } = useParams<{ scheduleId: string }>();
  const navigate = useNavigate();
  const { mutateAsync: patchMutate, isPending: patchIsPending } =
    usePatchSchedule();
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [places, setPlaces] = useState<
    GetScheduleDetailResponse['data']['placeList']
  >([]);

  const {
    data: scheduleDetail,
    isPending,
    isError,
    error,
  } = useGetScheduleDetail(id);
  const { mutateAsync, isPending: deleteIsPending } = useDeleteSchedule();

  useEffect(() => {
    if (scheduleDetail?.data.placeList)
      setPlaces(scheduleDetail.data.placeList);
  }, [scheduleDetail?.data.placeList]);

  if (isPending || deleteIsPending) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const scheduleId = scheduleDetail.data.scheduleId;

  const handleDeleteSchedule = async () => {
    if (deleteIsPending) return null;

    await mutateAsync(scheduleId);
    navigate('/trips');
  };

  const handleCalendarSubmit = async () => {
    const date = formatDateRange(range);
    if (patchIsPending || !scheduleId || !date) return null;

    await patchMutate({
      scheduleId,
      data: { description: date },
    });
  };

  const handleMode = async () => {
    if (patchIsPending || !scheduleId) return null;

    if (mode === 'edit') {
      const placeInfo = places.map((v, i) => ({
        placeOrder: i,
        placeInfo: v,
      }));

      await patchMutate({
        scheduleId,
        data: { placeInfoRequests: placeInfo },
      });
    }

    setMode((mode) => (mode === 'view' ? 'edit' : 'view'));
  };

  return (
    <>
      {open && (
        <RenameModal
          defaultName={defaultName}
          open={open}
          onOpenChange={setOpen}
          scheduleId={scheduleId}
        />
      )}
      {calendarOpen && (
        <Calendar
          open={calendarOpen}
          range={range}
          onRange={setRange}
          onOpenChange={setCalendarOpen}
          onSubmit={handleCalendarSubmit}
        />
      )}
      <Sheet
        ref={ref}
        isOpen
        onClose={() => {}}
        initialSnap={snapPoints.length - 2}
        snapPoints={snapPoints}
        className='mx-auto w-[360px]'
        style={{ zIndex: 30 }}
      >
        <Sheet.Container style={{ boxShadow: 'none' }}>
          <Sheet.Header className='flex h-12 items-center' />
          <Sheet.Content
            className='gap-024 pb-[104px]'
            disableDrag
          >
            <div className={'flex flex-col items-end'}>
              <SectionTitle
                size='l'
                title={scheduleDetail.data.scheduleName}
                description={
                  <button
                    className='px-012 text-sy_label-light gap-008 flex cursor-pointer items-center'
                    onClick={() => setCalendarOpen(true)}
                  >
                    {scheduleDetail.data.description}
                    <CalendarIcon className='size-[18px]' />
                  </button>
                }
                RightIcon={
                  <DropdownMenu>
                    <DropdownMenuTrigger className='flex h-12 w-12 items-center justify-center'>
                      <MoreIcon className='size-6' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align='start'
                      className='p-0'
                    >
                      <DropdownMenuItem className='p-0'>
                        <Menu>
                          <Menu.Item
                            title={t('menu:menu_rename')}
                            onClick={() => {
                              setDefaultName(scheduleDetail.data.scheduleName);
                              setOpen(true);
                            }}
                          />
                          <Menu.Item
                            title={t('menu:menu_delete')}
                            variant='negative'
                            onClick={handleDeleteSchedule}
                          />
                        </Menu>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
              />

              <div className='gap-008 mr-6 flex'>
                <ButtonChip
                  Icon={AddIcon}
                  label={t('buttonChip:button-chip_addPlace')}
                />
                <ButtonChip
                  label={t(
                    mode === 'view'
                      ? 'buttonChip:button-chip_edit'
                      : 'buttonChip:button-chip_done'
                  )}
                  isActive={mode === 'edit'}
                  onClick={handleMode}
                />
              </div>
            </div>

            <ScrollArea className='h-[calc(80dvh-314px)] w-full'>
              <TripDetailList
                places={places}
                setPlaces={setPlaces}
                mode={mode}
              />
            </ScrollArea>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default TripDetailListSheet;
