import ButtonActionFill from '@/components/common/ButtonActionFill';
import ButtonChip from '@/components/common/ButtonChip';
import Calendar from '@/components/common/Calendar';
import Driver from '@/components/common/Driver';
import ListItem from '@/components/common/ListItem';
import Map from '@/components/common/Map';
import SectionTitle from '@/components/common/SectionTitle';
import AddCircleIcon from '@/components/icons/system/AddCircleIcon';
import SortableListItem from '@/components/pages/Home/SortableListItem';
import { usePlaceCenter, usePlaceMarker } from '@/hooks/useMap';
import { usePatchSchedule } from '@/hooks/useSchedule';
import type { VideosResponse } from '@/types/video';
import { formatDateRange } from '@/utils/format';
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface VideoPlaceListProps {
  scheduleId: number;
  placeList: VideosResponse['data']['scheduleInfoResponse']['placeList'];
}

const VideoPlaceList = ({
  scheduleId,
  placeList: defaultPlaceList,
}: VideoPlaceListProps) => {
  const { t } = useTranslation([
    'sectionTitle',
    'listItem',
    'buttonAction',
    'buttonChip',
    'info',
  ]);
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [placeList, setPlaceList] = useState(defaultPlaceList);
  const [deletePlaceList, setDeletePlaceList] = useState<
    VideosResponse['data']['scheduleInfoResponse']['placeList']
  >([]);
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRange>();
  const { mutateAsync, isPending } = usePatchSchedule();
  const navigate = useNavigate();

  const handleMode = () => {
    setMode((mode) => (mode === 'view' ? 'edit' : 'view'));
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = placeList.findIndex((p) => p.placeId === active.id);
      const newIndex = placeList.findIndex((p) => p.placeId === over?.id);
      setPlaceList(arrayMove(placeList, oldIndex, newIndex));
    }
  };

  const handleRemove = (placeId: number) => {
    const removed = placeList.find((place) => place.placeId === placeId);
    if (!removed) return;

    setDeletePlaceList((prev) => [...prev, removed]);
    setPlaceList((prev) => prev.filter((place) => place.placeId !== placeId));
  };

  const handleAdd = (placeId: number) => {
    const addItem = deletePlaceList.find((place) => place.placeId === placeId);
    if (!addItem) return;

    setDeletePlaceList((prev) =>
      prev.filter((place) => place.placeId !== placeId)
    );
    setPlaceList((prev) => [...prev, addItem]);
  };

  const markerArr = placeList?.map((place) => ({
    ...place,
  }));

  usePlaceCenter({
    latitude: placeList[0]?.latitude,
    longitude: placeList[0]?.longitude,
  });
  usePlaceMarker({
    places: markerArr,
    pin: 'number',
  });

  const handleCreateSchedule = async () => {
    const date = formatDateRange(range);

    if (isPending || !scheduleId || !date) return null;

    const placeInfo = placeList.map((v, i) => ({
      placeOrder: i,
      placeInfo: v,
    }));

    await mutateAsync({
      scheduleId,
      data: {
        description: date,
        placeInfoRequests: placeInfo,
      },
    });

    navigate(`/trips/${scheduleId}`);
  };

  return (
    <div className='gap-012 flex flex-col pb-[72px]'>
      <div className='gap-008 flex flex-col items-center'>
        <SectionTitle title={t('sectionTitle_placeList')} />

        <div className='bg-sy_container-neutral-normal h-[312px] w-[312px]'>
          <Map />
        </div>
      </div>

      <div>
        <div className='px-024 py-004 flex items-center justify-end'>
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

        <div className='gap-012 flex flex-col'>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={placeList.map((p) => p.placeId)}
              strategy={verticalListSortingStrategy}
            >
              <div className='gap-012 flex flex-col'>
                {placeList.map((place, idx) => (
                  <SortableListItem
                    key={place.placeId}
                    id={place.placeId}
                    idx={idx}
                    title={place.translatedPlaceName ?? place.placeName}
                    description={
                      place.translatedRoadAddress ?? place.roadAddress
                    }
                    mode={mode}
                    onRemove={() => handleRemove(place.placeId)}
                  />
                ))}

                {mode === 'edit' && (
                  <>
                    <Driver />
                    {deletePlaceList.map((place) => (
                      <ListItem
                        key={place.placeId}
                        Pin={AddCircleIcon}
                        title={place.placeName}
                        description={place.roadAddress}
                        onPinClick={() => handleAdd(place.placeId)}
                        status='delete'
                      />
                    ))}
                  </>
                )}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        <div className='px-024 py-028'>
          <ButtonActionFill
            variant='neutral'
            onClick={() => setOpen(true)}
          >
            {t('buttonAction:button-action_plan')}
          </ButtonActionFill>
          {open && (
            <Calendar
              open={open}
              range={range}
              onRange={setRange}
              onOpenChange={setOpen}
              onSubmit={handleCreateSchedule}
            />
          )}
        </div>
      </div>

      <p className='px-024 text-sy_label-light body_s'>{t('info:info')}</p>
    </div>
  );
};

export default VideoPlaceList;
