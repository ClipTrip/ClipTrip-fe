import { useSortable } from '@dnd-kit/sortable';
import DragIcon from '@/components/icons/system/DragIcon';
import PinNumberIcon from '@/components/icons/system/PinNumberIcon';
import RemoveCircleIcon from '@/components/icons/system/RemoveCircleIcon';
import TripDetailListItem from '@/components/pages/Trips/[scheduleId]/TripDetailListItem';

interface Props {
  id: number;
  idx: number;
  title: string;
  category: string;
  time: number;
  mode: 'view' | 'edit';
  onClick?: () => void;
  onRemove?: () => void;
}

const SortableListItem = ({
  id,
  idx,
  title,
  category,
  time,
  onClick,
  mode,
  onRemove,
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
    >
      <TripDetailListItem
        title={title}
        category={category}
        time={time}
        onClick={onClick}
        Pin={
          mode === 'edit'
            ? RemoveCircleIcon
            : PinNumberIcon.bind(null, { number: idx + 1 })
        }
        onPinClick={() => {
          if (mode === 'edit') onRemove?.();
        }}
        RightIcon={
          mode === 'edit' && (
            <button
              {...attributes}
              {...listeners}
              className='cursor-pointer'
            >
              <DragIcon />
            </button>
          )
        }
      />
    </div>
  );
};

export default SortableListItem;
