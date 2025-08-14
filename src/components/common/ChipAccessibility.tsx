import { cn } from '@/lib/utils';
import { type ComponentType, type SVGProps } from 'react';

interface ChipAccessibilityProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

const ChipAccessibility = ({ Icon, label }: ChipAccessibilityProps) => {
  return (
    <div
      className={cn(
        'bg-sy_container-neutral-normal px-016 gap-008 flex h-10 items-center'
      )}
    >
      <Icon className={cn('size-6')} />
      <span className={cn('label_s text-sy_label-alternative')}>{label}</span>
    </div>
  );
};

export default ChipAccessibility;
