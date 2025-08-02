import ChipCategory from '@/components/common/ChipCategory';
import AttractionsIcon from '@/components/icons/category/AttractionsIcon';
import CafesIcon from '@/components/icons/category/CafesIcon';
import HotelsIcon from '@/components/icons/category/HotelsIcon';
import ParkingIcon from '@/components/icons/category/ParkingIcon';
import PublicServicesIcon from '@/components/icons/category/PublicServicesIcon';
import RestaurantsIcon from '@/components/icons/category/RestaurantsIcon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useTranslation } from 'react-i18next';

const CHIPS = [
  { label: 'category-01', Icon: RestaurantsIcon, color: 'restaurants' },
  {
    label: 'category-02',
    Icon: CafesIcon,
    color: 'cafes',
  },
  {
    label: 'category-03',
    Icon: HotelsIcon,
    color: 'hotels',
  },
  {
    label: 'category-04',
    Icon: AttractionsIcon,
    color: 'attractions',
  },
  {
    label: 'category-05',
    Icon: PublicServicesIcon,
    color: 'publicServices',
  },
  {
    label: 'category-06',
    Icon: ParkingIcon,
    color: 'parking',
  },
] as const;

const ChipsCategory = () => {
  const { t } = useTranslation('chip');

  return (
    <Carousel className='w-full'>
      <CarouselContent className='pl-3'>
        {CHIPS.map(({ label, color, Icon }) => (
          <CarouselItem
            key={label}
            className='pl-004 basis-auto'
          >
            <ChipCategory
              Icon={Icon}
              label={t(label)}
              color={color}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ChipsCategory;
