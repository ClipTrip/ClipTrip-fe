import ButtonActionFill from "@/components/common/ButtonActionFill";
import ButtonChip from "@/components/common/ButtonChip";
import Driver from "@/components/common/Driver";
import ListItem from "@/components/common/ListItem";
import SectionTitle from "@/components/common/SectionTitle";
import AddCircleIcon from "@/components/icons/system/AddCircleIcon";
import SortableListItem from "@/components/pages/Home/SortableListItem";
import type { VideosResponse } from "@/types/video";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface VideoPlaceListProps {
  placeList: VideosResponse["data"]["scheduleInfoResponse"]["placeList"];
}

const VideoPlaceList = ({ placeList: defaultPlaceList }: VideoPlaceListProps) => {
  const { t } = useTranslation(["sectionTitle", "listItem", "buttonAction", "buttonChip", "info"]);
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [placeList, setPlaceList] = useState(defaultPlaceList);
  const [deletePlaceList, setDeletePlaceList] = useState<
    VideosResponse["data"]["scheduleInfoResponse"]["placeList"]
  >([]);

  const handleMode = () => {
    setMode((mode) => (mode === "view" ? "edit" : "view"));
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

    setDeletePlaceList((prev) => prev.filter((place) => place.placeId !== placeId));
    setPlaceList((prev) => [...prev, addItem]);
  };

  return (
    <div className="flex flex-col gap-012 pb-[72px]">
      <div className="flex flex-col gap-008 items-center">
        <SectionTitle title={t("sectionTitle_placeList")} />
        <div className="bg-sy_container-neutral-normal w-[312px] h-[312px]"></div>
      </div>

      <div>
        <div className="flex justify-end items-center px-024 py-004">
          <ButtonChip
            label={t(
              mode === "view" ? "buttonChip:button-chip_edit" : "buttonChip:button-chip_done"
            )}
            isActive={mode === "edit"}
            onClick={handleMode}
          />
        </div>

        <div className="flex flex-col gap-012">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={placeList.map((p) => p.placeId)}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col gap-012">
                {placeList.map((place, idx) => (
                  <SortableListItem
                    key={place.placeId}
                    id={place.placeId}
                    idx={idx}
                    title={place.placeName}
                    description={place.roadAddress}
                    mode={mode}
                    onRemove={() => handleRemove(place.placeId)}
                  />
                ))}

                {mode === "edit" && (
                  <>
                    <Driver />
                    {deletePlaceList.map((place) => (
                      <ListItem
                        key={place.placeId}
                        Pin={AddCircleIcon}
                        title={place.placeName}
                        description={place.roadAddress}
                        onPinClick={() => handleAdd(place.placeId)}
                        status="delete"
                      />
                    ))}
                  </>
                )}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        <div className="px-024 py-028">
          <ButtonActionFill variant="neutral">
            {t("buttonAction:button-action_plan")}
          </ButtonActionFill>
        </div>
      </div>

      <p className="px-024 text-sy_label-light body_s">{t("info:info")}</p>
    </div>
  );
};

export default VideoPlaceList;
