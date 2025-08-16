import Driver from '@/components/common/Driver';
import ListItem from '@/components/common/ListItem';
import AddCircleIcon from '@/components/icons/system/AddCircleIcon';
import SortableListItem from '@/components/pages/Trips/[scheduleId]/SortableListItem';

import { usePlaceCenter, usePlaceMarker } from '@/hooks/useMap';
import type { GetScheduleDetailResponse } from '@/types/schedule';
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
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface TripDetailListProps {
  places: GetScheduleDetailResponse['data']['placeList'];
  setPlaces: Dispatch<
    SetStateAction<GetScheduleDetailResponse['data']['placeList']>
  >;
  mode: 'edit' | 'view' | 'add';
  durationData: number[] | null;
}

const TripDetailList = ({
  mode,
  places,
  durationData,
  setPlaces,
}: TripDetailListProps) => {
  const { t } = useTranslation('category');
  const navigate = useNavigate();

  const [deletePlaceList, setDeletePlaceList] = useState<
    GetScheduleDetailResponse['data']['placeList']
  >([]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = places.findIndex((p) => p.placeId === active.id);
      const newIndex = places.findIndex((p) => p.placeId === over?.id);
      setPlaces(arrayMove(places, oldIndex, newIndex));
    }
  };

  const handleRemove = (placeId: number) => {
    const removed = places.find((place) => place.placeId === placeId);
    if (!removed) return;

    setDeletePlaceList((prev) => [...prev, removed]);
    setPlaces((prev) => prev.filter((place) => place.placeId !== placeId));
  };

  const handleAdd = (placeId: number) => {
    const addItem = deletePlaceList.find((place) => place.placeId === placeId);
    if (!addItem) return;

    setDeletePlaceList((prev) =>
      prev.filter((place) => place.placeId !== placeId)
    );
    setPlaces((prev) => [...prev, addItem]);
  };

  const markerArr = places?.map((place) => ({
    latitude: place.latitude,
    longitude: place.longitude,
  }));

  usePlaceCenter(
    markerArr[0]
      ? {
          latitude: markerArr[0].latitude,
          longitude: markerArr[0].longitude,
        }
      : undefined
  );

  usePlaceMarker({ places: markerArr, pin: 'number' });

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={places.map((p) => p.placeId)}
          strategy={verticalListSortingStrategy}
        >
          <div className='gap-012 flex flex-col'>
            {places.map((place, idx) => (
              <SortableListItem
                key={place.placeId}
                id={place.placeId}
                idx={idx}
                title={place.translatedPlaceName ?? place.placeName}
                category={t(place.type)}
                time={durationData ? durationData[idx] : undefined}
                mode={mode}
                onRemove={() => handleRemove(place.placeId)}
                onClick={() => navigate(`/places/${place.placeId}`)}
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
    </>
  );
};

export default TripDetailList;
