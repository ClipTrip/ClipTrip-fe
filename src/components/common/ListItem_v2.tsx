import type { ElementType } from 'react';

interface ListItem_v2Props {
  Icon?: ElementType;
  text: string;
}

const ListItem_v2 = ({ text, Icon }: ListItem_v2Props) => {
  return (
    <div className='bg-sy_container-neutral-white gap-008 flex min-h-11 w-[360px] items-center px-6'>
      {Icon && <Icon className='size-6 shrink-0' />}
      <span className='body_m-prominent text-sy_label-normal'>{text}</span>
    </div>
  );
};

export default ListItem_v2;
