import ButtonIcon from "@/components/common/ButtonIcon";
import { cn } from "@/lib/utils";
import { isValidElement, type ElementType, type ReactNode } from "react";

interface ListItemProps {
  title: string;
  description?: string;
  Pin?: ElementType;
  onPinClick?: () => void;
  RightIcon?: ElementType | ReactNode;
  onRightIconClick?: () => void;
  status?: "delete";
}

const ListItem = ({
  Pin,
  RightIcon,
  title,
  description,
  status,
  onPinClick,
  onRightIconClick
}: ListItemProps) => {
  const renderRightIcon = () => {
    if (!RightIcon) return null;

    if (isValidElement(RightIcon)) {
      return RightIcon;
    }

    if (typeof RightIcon === "function") {
      return <ButtonIcon Icon={RightIcon} onClick={onRightIconClick} />;
    }

    return null;
  };
  return (
    <div className="flex py-008 pr-012 pl-024 bg-sy_container-neutral-white active:bg-sy_container-neutral-normal cursor-pointer">
      {Pin && (
        <div className="w-9 h-[51px] py-[3px] pr-012">
          <button onClick={onPinClick} className={cn(!!onPinClick && "cursor-pointer")}>
            <Pin />
          </button>
        </div>
      )}
      <div className="flex flex-col gap-004 grow pr-012">
        <h2
          data-state={status}
          className="data-[state=delete]:text-sy_label-light title_m text-sy_label-normal"
        >
          {title}
        </h2>
        {description && (
          <p data-state={status} className="body_m text-sy_label-light">
            {description}
          </p>
        )}
      </div>
      {renderRightIcon()}
    </div>
  );
};

export default ListItem;
