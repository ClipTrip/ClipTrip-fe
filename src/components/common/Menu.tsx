import MenuItem from '@/components/common/MenuItem';

interface MenuProps {
  title?: string;
  menuItems?: { title: string; variant?: 'neutral' | 'negative' }[];
  onMenuItemClick?: (item: string) => void;
}

const Menu = ({ title, menuItems, onMenuItemClick }: MenuProps) => {
  return (
    <div className='py-004 rounded-010 bg-sy_container-neutral-white flex w-[155px] flex-col'>
      {title && (
        <h3 className='title_s-prominent px-012 h-10 w-full'>{title}</h3>
      )}
      {menuItems?.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          variant={item.variant}
          onClick={() => onMenuItemClick?.(item.title)}
        />
      ))}
    </div>
  );
};

export default Menu;
