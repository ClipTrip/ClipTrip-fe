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
import type { AccessibilityType } from '@/types/place';

const ACCESSIBILITY: {
  name?: AccessibilityType;
  label: keyof typeof accessibility;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    name: 'PAID_PARKING',
    label: 'accessibility-01',
    Icon: PaidParkingIcon,
  },
  {
    name: 'FREE_PARKING',
    label: 'accessibility-02',
    Icon: FreeParkingIcon,
  },
  {
    name: 'ENTRANCE_FOR_DISABLED',
    label: 'accessibility-03',
    Icon: AccessibleEntranceIcon,
  },
  {
    name: 'WHEELCHAIR_RENTAL',
    label: 'accessibility-04',
    Icon: WhellchairRentalIcon,
  },
  {
    name: 'DISABLED_TOILET',
    label: 'accessibility-05',
    Icon: AccessibleRestroomIcon,
  },
  {
    name: 'EXCLUSIVE_PARKING',
    label: 'accessibility-06',
    Icon: AccessibleParkingIcon,
  },
  {
    name: 'LARGE_PARKING',
    label: 'accessibility-07',
    Icon: LargeParkinglotIcon,
  },
  {
    name: 'GUIDE_DOG_ALLOWED',
    label: 'accessibility-08',
    Icon: GuideDogsAllowedIcon,
  },
  {
    name: 'BRAILLE_GUIDE',
    label: 'accessibility-09',
    Icon: BrailleGuideAvailableIcon,
  },
  {
    name: 'AUDIO_GUIDE_KR',
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

interface ChipsAccessibilityProps {
  accessibilityFeatures: AccessibilityType[];
}

const ChipsAccessibility = ({
  accessibilityFeatures,
}: ChipsAccessibilityProps) => {
  const { t } = useTranslation('accessibility');
  const accessibility = ACCESSIBILITY.filter(
    (item) => item.name && accessibilityFeatures.includes(item.name)
  );

  return (
    <Carousel className='w-full'>
      <CarouselContent className='pl-4'>
        {accessibility.map(({ label, Icon }) => (
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
