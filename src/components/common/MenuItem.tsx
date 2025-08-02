import { cn } from '@/lib/utils';

interface MenuItemProps {
  variant?: 'neutral' | 'negative';
  title: string;
  onClick?: () => void;
}

const MenuItem = ({ variant = 'neutral', title, onClick }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className='bg-sy_container-neutral-white active:bg-sy_container-neutral-normal px-016 h-10 w-[155px] cursor-pointer text-left'
    >
      <span
        className={cn(
          'label_m text-sy_label-light',
          variant === 'negative' && 'text-sy_status-negative-normal'
        )}
      >
        {title}
      </span>
    </button>
  );
};

export default MenuItem;
