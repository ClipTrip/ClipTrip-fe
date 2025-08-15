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
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteSchedule, useGetScheduleDetail } from '@/hooks/useSchedule';
import FullPageLoading from '@/components/common/FullPageLoading';
import TripDetailList from '@/components/pages/Trips/[scheduleId]/TripDetailList';
import ButtonChip from '@/components/common/ButtonChip';
import AddIcon from '@/components/icons/system/AddIcon';
import RenameModal from '@/components/pages/Trips/RenameModal';

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
  const [defaultName, setDefaultName] = useState('');
  const { scheduleId: id } = useParams<{ scheduleId: string }>();
  const navigate = useNavigate();

  const {
    data: scheduleDetail,
    isPending,
    isError,
    error,
  } = useGetScheduleDetail(id);
  const { mutateAsync, isPending: deleteIsPending } = useDeleteSchedule();

  if (isPending || deleteIsPending) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const scheduleId = scheduleDetail.data.scheduleId;
  const placeList = scheduleDetail.data.placeList;

  const handleDeleteSchedule = async () => {
    if (deleteIsPending) return null;

    await mutateAsync(scheduleId);
    navigate('/trips');
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
          <Sheet.Content className='gap-024 pb-[104px]'>
            <div className={'flex flex-col items-end'}>
              <SectionTitle
                size='l'
                title={scheduleDetail.data.scheduleName}
                description={scheduleDetail.data.description}
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
                <ButtonChip label={t('buttonChip:button-chip_edit')} />
              </div>
            </div>

            <ScrollArea className='h-[calc(80dvh-314px)] w-full'>
              <TripDetailList placeList={placeList} />
            </ScrollArea>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default TripDetailListSheet;
