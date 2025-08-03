import { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

const MenuContext = createContext<object>({});

interface MenuProps {
  title?: string;
  children: React.ReactNode;
}

const Menu = ({ title, children }: MenuProps) => {
  return (
    <MenuContext.Provider value={{}}>
      <div className='py-004 rounded-010 bg-sy_container-neutral-white flex w-[155px] flex-col'>
        {title && (
          <h3 className='title_s-prominent px-012 h-10 w-full'>{title}</h3>
        )}
        {children}
      </div>
    </MenuContext.Provider>
  );
};

interface MenuItemProps {
  title: string;
  variant?: 'neutral' | 'negative';
  onClick?: () => void;
}

const Item = ({ title, variant = 'neutral', onClick }: MenuItemProps) => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('Menu.Item must be used within a <Menu>');
  }

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

Menu.Item = Item;

export default Menu;
