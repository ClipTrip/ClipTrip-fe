import ChipCategory from '@/components/common/ChipCategory';
import AttractionsIcon from '@/components/icons/category/AttractionsIcon';
import CafesIcon from '@/components/icons/category/CafesIcon';
import HotelsIcon from '@/components/icons/category/HotelsIcon';
import LockerIcon from '@/components/icons/category/LockerIcon';
import ParkingIcon from '@/components/icons/category/ParkingIcon';
import PublicServicesIcon from '@/components/icons/category/PublicServicesIcon';
import RestaurantsIcon from '@/components/icons/category/RestaurantsIcon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { CategoryCodeType } from '@/types/place';
import { useState, type ComponentType, type SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import chip from '@/locales/en/chip.json';

export type chipColor =
  | 'restaurants'
  | 'cafes'
  | 'hotels'
  | 'attractions'
  | 'publicServices'
  | 'parking'
  | 'carrier';

const CHIPS: {
  label: keyof typeof chip;
  code: CategoryCodeType | CategoryCodeType[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: chipColor;
}[] = [
  {
    label: 'category-01',
    code: 'FD6',
    Icon: RestaurantsIcon,
    color: 'restaurants',
  },
  {
    label: 'category-02',
    code: 'CE7',
    Icon: CafesIcon,
    color: 'cafes',
  },
  {
    label: 'category-03',
    code: 'AD5',
    Icon: HotelsIcon,
    color: 'hotels',
  },
  {
    label: 'category-04',
    code: ['CT1', 'AT4'],
    Icon: AttractionsIcon,
    color: 'attractions',
  },
  {
    label: 'category-05',
    code: 'PO3',
    Icon: PublicServicesIcon,
    color: 'publicServices',
  },
  {
    label: 'category-06',
    code: 'PK6',
    Icon: ParkingIcon,
    color: 'parking',
  },
  { label: 'category-07', code: 'LS1', Icon: LockerIcon, color: 'carrier' },
] as const;

interface ChipsCategoryProps {
  onClick?: (code: CategoryCodeType | CategoryCodeType[]) => void;
}

const ChipsCategory = ({ onClick }: ChipsCategoryProps) => {
  const { t } = useTranslation('chip');
  const [activeCode, setActiveCode] = useState<
    CategoryCodeType | CategoryCodeType[] | null
  >(null);

  const handleClick = (code: CategoryCodeType | CategoryCodeType[]) => {
    setActiveCode(code);
    onClick?.(code);
  };

  return (
    <Carousel className='w-full'>
      <CarouselContent className='pl-3'>
        {CHIPS.map(({ label, code, color, Icon }) => {
          const isActive =
            Array.isArray(code) && Array.isArray(activeCode)
              ? code.every((c) => activeCode.includes(c))
              : code === activeCode;

          return (
            <CarouselItem
              key={label}
              className='pl-004 basis-auto'
            >
              <ChipCategory
                Icon={Icon}
                code={code}
                label={t(label)}
                color={color}
                isActive={isActive}
                onClick={handleClick}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default ChipsCategory;
