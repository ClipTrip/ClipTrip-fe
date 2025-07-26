// components/common/SortableListItem.tsx
import { useSortable } from "@dnd-kit/sortable";
import DragIcon from "@/components/icons/system/DragIcon";
import PinNumberIcon from "@/components/icons/system/PinNumberIcon";
import RemoveCircleIcon from "@/components/icons/system/RemoveCircleIcon";
import ListItem from "@/components/common/ListItem";

interface Props {
  id: number;
  idx: number;
  title: string;
  description?: string;
  mode: "view" | "edit";
  onRemove?: () => void;
}

const SortableListItem = ({ id, idx, title, description, mode, onRemove }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition
  };

  return (
    <div ref={setNodeRef} style={style}>
      <ListItem
        title={title}
        description={description}
        Pin={mode === "edit" ? RemoveCircleIcon : PinNumberIcon.bind(null, { number: idx + 1 })}
        onPinClick={onRemove}
        RightIcon={
          mode === "edit" && (
            <button {...attributes} {...listeners} className="cursor-pointer">
              <DragIcon />
            </button>
          )
        }
      />
    </div>
  );
};

export default SortableListItem;
