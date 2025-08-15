interface DayDivderProps {
  day: number;
}

const DayDivder = ({ day }: DayDivderProps) => {
  return (
    <div className='flex h-5 w-full items-center gap-2.5'>
      <span className='label_s text-sy_label-light'>Day {day}</span>
      <div className='border-sy_line-normal w-full border' />
    </div>
  );
};

export default DayDivder;
