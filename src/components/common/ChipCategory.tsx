import { cn } from '@/lib/utils';
import type { ComponentType, SVGProps } from 'react';

interface ChipCategoryProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  color:
    | 'restaurants'
    | 'cafes'
    | 'hotels'
    | 'attractions'
    | 'publicServices'
    | 'parking'
    | 'carrier';
  isActive?: boolean;
  onClick?: () => void;
}

const COLOR = {
  restaurants: {
    bg: 'bg-sy_icon-color-restaurants',
    text: 'text-sy_icon-color-restaurants',
  },
  cafes: {
    bg: 'bg-sy_icon-color-cafes',
    text: 'text-sy_icon-color-cafes',
  },
  hotels: {
    bg: 'bg-sy_icon-color-hotels',
    text: 'text-sy_icon-color-hotels',
  },
  attractions: {
    bg: 'bg-sy_icon-color-attractions',
    text: 'text-sy_icon-color-attractions',
  },
  publicServices: {
    bg: 'bg-sy_icon-color-publicServices',
    text: 'text-sy_icon-color-publicServices',
  },
  parking: {
    bg: 'bg-sy_icon-color-parking',
    text: 'text-sy_icon-color-parking',
  },
  carrier: {
    bg: 'bg-sy_icon-color-carrier',
    text: 'text-sy_icon-color-carrier',
  },
};

const ChipCategory = ({
  Icon,
  label,
  color,
  isActive = false,
  onClick,
}: ChipCategoryProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-010 bg-sy_container-neutral-white px-012 py-008 gap-004 flex items-center',
        isActive && COLOR[color].bg,
        onClick && 'cursor-pointer'
      )}
    >
      <Icon
        className={cn(
          'h-[18px] w-[18px]',
          COLOR[color].text,
          isActive && 'text-sy_label-white'
        )}
      />
      <span
        className={cn(
          'label_s text-sy_label-normal',
          isActive && 'text-sy_label-white'
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default ChipCategory;
