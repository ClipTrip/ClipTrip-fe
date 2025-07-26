import ButtonIcon from "@/components/common/ButtonIcon";
import type { ElementType } from "react";

interface ListItemProps {
  title: string;
  description?: string;
  Pin?: ElementType;
  RightIcon?: ElementType;
}

const ListItem = ({ Pin, RightIcon, title, description }: ListItemProps) => {
  return (
    <div className="flex py-008 pr-012 pl-024 bg-sy_container-neutral-white active:bg-sy_container-neutral-normal cursor-pointer">
      {Pin && (
        <div className="w-9 h-[51px] py-[3px] pr-012">
          <Pin />
        </div>
      )}
      <div className="flex flex-col gap-004 grow pr-012">
        <h2 className="title_m text-sy_label-normal">{title}</h2>
        {description && <p className="body_m text-sy_label-light">{description}</p>}
      </div>
      {RightIcon && <ButtonIcon Icon={RightIcon} />}
    </div>
  );
};

export default ListItem;
