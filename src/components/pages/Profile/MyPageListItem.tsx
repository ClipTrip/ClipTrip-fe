import ButtonIcon from '@/components/common/ButtonIcon.tsx';
import { type ElementType, type ReactNode } from 'react';

interface ListItemProps {
  title: string;
  RightIcon?: ElementType | ReactNode;
  onRightIconClick?: () => void;
}

const MyPageListItem = ({
  title,
  RightIcon,
  onRightIconClick,
}: ListItemProps) => {
  const renderRightIcon = () => {
    if (!RightIcon) return null;

    if (typeof RightIcon === 'function') {
      return (
        <ButtonIcon
          Icon={RightIcon}
          onClick={onRightIconClick}
        />
      );
    }

    return null;
  };
  return (
    <div className='px-024 py-008 flex items-center justify-between'>
      <p className={'title_m text-sy_label-normal'}>{title}</p>
      {renderRightIcon()}
    </div>
  );
};

export default MyPageListItem;
