import ChevronRightIcon from '@/components/icons/system/ChevronRightIcon';

interface ListItemProps {
  title: string;
  onClick?: () => void;
}

const MyPageListItem = ({ title, onClick }: ListItemProps) => {
  return (
    <button
      className='px-024 py-008 flex cursor-pointer items-center justify-between'
      onClick={onClick}
    >
      <p className={'title_m text-sy_label-normal'}>{title}</p>
      <div className='flex size-12 items-center justify-center'>
        <ChevronRightIcon className='size-6' />
      </div>
    </button>
  );
};

export default MyPageListItem;
