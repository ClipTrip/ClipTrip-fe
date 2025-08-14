import ButtonChip from '@/components/common/ButtonChip';
import AddIcon from '@/components/icons/system/AddIcon';

interface RecommendedHotelCardProps {
  src?: string;
  alt?: string;
}

const RecommendedHotelCard = ({ src, alt }: RecommendedHotelCardProps) => {
  return (
    <div className='gap-008 flex flex-col'>
      <img
        src={src}
        alt={alt}
        className='bg-sy_container-neutral-normal h-[113px] w-full min-w-[202px] overflow-hidden rounded-[5px] object-cover'
      />

      <h3 className='body_m-prominent text-sy_label-normal'>장소 이름</h3>

      <ButtonChip
        label='일정에 추가'
        Icon={AddIcon}
      />
    </div>
  );
};

export default RecommendedHotelCard;
