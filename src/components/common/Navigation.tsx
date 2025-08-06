import NaviItem from '@/components/common/NaviItem';
import HomeIcon from '@/components/icons/navi/HomeIcon';
import PlacesIcon from '@/components/icons/navi/PlacesIcon';
import PlansIcon from '@/components/icons/navi/PlansIcon';
import ProfileIcon from '@/components/icons/navi/ProfileIcon';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const { t } = useTranslation('naviItem');

  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById('navigation-root');
    if (el) setContainer(el);
  }, []);

  if (!container) return null;

  return createPortal(
    <div
      className={cn(
        'pt-004 px-024 pb-028 bg-sy_container-neutral-white w-[360px]',
        className
      )}
    >
      <nav className='bg-sy_container-neutral-white shadow-elevation flex h-[72px] w-full items-center justify-center rounded-full'>
        <NaviItem
          href=''
          Icon={HomeIcon}
          label={t('naviItem-01')}
        />
        <NaviItem
          href='trips'
          Icon={PlansIcon}
          label={t('naviItem-02')}
        />
        <NaviItem
          href='places'
          Icon={PlacesIcon}
          label={t('naviItem-03')}
        />
        <NaviItem
          href='profile'
          Icon={ProfileIcon}
          label={t('naviItem-04')}
        />
      </nav>
    </div>,
    container
  );
};

export default Navigation;
