import { cn } from '@/lib/utils';

const CARD = [
  'bg-[url("/card01.png")]',
  'bg-[url("/card02.png")]',
  'bg-[url("/card03.png")]',
  'bg-[url("/card04.png")]',
];

interface TripCardProps {
  size?: number;
  title?: string;
  description?: string;
}

const TripCard = ({ size, title, description }: TripCardProps) => {
  const random = Math.floor(Math.random() * 4);
  const randomCard = CARD[random];
  const textColor =
    random === 0 ? 'text-sy_label-white/50' : 'text-sy_label-normal/50';

  return (
    <div
      className={cn(
        'rounded-020 p-020 flex h-[254px] w-[194px] flex-col justify-between bg-cover bg-center',
        randomCard
      )}
    >
      <span className={cn('body_s', textColor)}>
        {size && `${size}개의 장소`}
      </span>

      <div>
        <h2
          className={cn(
            'headline_m text-sy_label-normal',
            random === 0 && 'text-sy_label-white'
          )}
        >
          {title}
        </h2>
        <p className={cn('body_s', textColor)}>{description}</p>
      </div>
    </div>
  );
};

export default TripCard;
