import ListItem from '@/components/common/ListItem';
import AddIcon from '@/components/icons/system/AddIcon';
import MoreIcon from '@/components/icons/system/MoreIcon';

const TripList = () => {
  return (
    <div className='pb-[104px]'>
      <header className='px-012 flex h-[69px] items-center justify-between'>
        <div className='gap-004 flex h-12 items-center'>
          <h2 className='pl-012 title_l text-sy_label-normal'>내 일정</h2>
          <span className='title_m text-sy_label-light'>(3)</span>
        </div>

        <button className='flex size-12 cursor-pointer items-center justify-center'>
          <AddIcon className='size-6' />
        </button>
      </header>

      {[1, 2, 3, 4, 5].map((v) => (
        <ListItem
          key={v}
          title='내 일정'
          description='2025.08.01 ~ 2025.08.03'
          RightIcon={MoreIcon}
        />
      ))}
    </div>
  );
};

export default TripList;
