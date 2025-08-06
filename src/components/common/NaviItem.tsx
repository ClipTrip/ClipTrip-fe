import { cn } from '@/lib/utils';
import type { pagePath } from '@/routes/pagePath';
import type { ElementType } from 'react';
import { NavLink } from 'react-router-dom';

interface NaviItemProps {
  href: (typeof pagePath)[keyof typeof pagePath];
  Icon: ElementType;
  label: string;
  end?: boolean;
}

const NaviItem = ({ href, Icon, label, end }: NaviItemProps) => {
  return (
    <NavLink
      to={`/${href}`}
      end={end}
    >
      {({ isActive }) => (
        <div className={cn('flex w-16 cursor-pointer flex-col items-center')}>
          <div className='flex h-8 w-16 items-center justify-center'>
            <Icon isActive={isActive} />
          </div>
          <span
            className={cn(
              'label_s-prominent text-sy_label-light text-center',
              isActive && 'text-sy_label-normal'
            )}
          >
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default NaviItem;
