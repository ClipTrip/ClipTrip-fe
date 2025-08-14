import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { type ComponentType, type SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import accessibility from '@/locales/en/accessibility.json';
import PaidParkingIcon from '@/components/icons/accessibility/PaidParkingIcon';
import FreeParkingIcon from '@/components/icons/accessibility/FreeParkingIcon';
import AccessibleEntranceIcon from '@/components/icons/accessibility/AccessibleEntranceIcon';
import WheelchairRampIcon from '@/components/icons/accessibility/WheelchairRampIcon';
import AccessibleRestroomIcon from '@/components/icons/accessibility/AccessibleRestroomIcon';
import AccessibleParkingIcon from '@/components/icons/accessibility/AccessibleParkingIcon';
import LargeParkinglotIcon from '@/components/icons/accessibility/LargeParkinglotIcon';
import GuideDogsAllowedIcon from '@/components/icons/accessibility/GuideDogsAllowedIcon';
import BrailleGuideAvailableIcon from '@/components/icons/accessibility/BrailleGuideAvailableIcon';
import AudioGuideAvailableIcon from '@/components/icons/accessibility/AudioGuideAvailableIcon';
import ElevatorIcon from '@/components/icons/accessibility/ElevatorIcon';
import WhellchairRentalIcon from '@/components/icons/accessibility/WhellchairRentalIcon';
import ChipAccessibility from '@/components/common/ChipAccessibility';

const ACCESSIBILITY: {
  label: keyof typeof accessibility;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    label: 'accessibility-01',
    Icon: PaidParkingIcon,
  },
  {
    label: 'accessibility-02',
    Icon: FreeParkingIcon,
  },
  {
    label: 'accessibility-03',
    Icon: AccessibleEntranceIcon,
  },
  {
    label: 'accessibility-04',
    Icon: WhellchairRentalIcon,
  },
  {
    label: 'accessibility-05',
    Icon: AccessibleRestroomIcon,
  },
  {
    label: 'accessibility-06',
    Icon: AccessibleParkingIcon,
  },
  {
    label: 'accessibility-07',
    Icon: LargeParkinglotIcon,
  },
  {
    label: 'accessibility-08',
    Icon: GuideDogsAllowedIcon,
  },
  {
    label: 'accessibility-09',
    Icon: BrailleGuideAvailableIcon,
  },
  {
    label: 'accessibility-10',
    Icon: AudioGuideAvailableIcon,
  },
  {
    label: 'accessibility-11',
    Icon: ElevatorIcon,
  },
  {
    label: 'accessibility-12',
    Icon: WheelchairRampIcon,
  },
] as const;

const ChipsAccessibility = () => {
  const { t } = useTranslation('accessibility');

  return (
    <Carousel className='w-full'>
      <CarouselContent className='pl-4'>
        {ACCESSIBILITY.map(({ label, Icon }) => (
          <CarouselItem
            key={label}
            className='pl-008 basis-auto'
          >
            <ChipAccessibility
              Icon={Icon}
              label={t(label)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ChipsAccessibility;
