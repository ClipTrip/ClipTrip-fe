import ButtonActionFill from "@/components/common/ButtonActionFill";
import ButtonChip from "@/components/common/ButtonChip";
import Driver from "@/components/common/Driver";
import ListItem from "@/components/common/ListItem";
import SectionTitle from "@/components/common/SectionTitle";
import AddCircleIcon from "@/components/icons/system/AddCircleIcon";
import DragIcon from "@/components/icons/system/DragIcon";
import PinNumberIcon from "@/components/icons/system/PinNumberIcon";
import RemoveCircleIcon from "@/components/icons/system/RemoveCircleIcon";
import type { VideosResponse } from "@/types/video";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface VideoPlaceListProps {
  placeList: VideosResponse["data"]["scheduleInfoResponse"]["placeList"];
}

const VideoPlaceList = ({ placeList }: VideoPlaceListProps) => {
  const { t } = useTranslation(["sectionTitle", "listItem", "buttonAction", "buttonChip", "info"]);
  const [mode, setMode] = useState<"view" | "edit">("view");

  const handleMode = () => {
    setMode((mode) => (mode === "view" ? "edit" : "view"));
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
          {placeList.map((place, idx) => (
            <ListItem
              key={place.placeId}
              Pin={
                mode === "edit" ? RemoveCircleIcon : PinNumberIcon.bind(null, { number: idx + 1 })
              }
              title={place.placeName}
              description={place.roadAddress}
              RightIcon={mode === "edit" ? DragIcon : undefined}
            />
          ))}

          {mode === "edit" && (
            <>
              <Driver />

              <ListItem
                Pin={AddCircleIcon}
                title={t("listItem:listItem_placeName")}
                description={t("listItem:listItem_descriptionPlace")}
              />
            </>
          )}
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
