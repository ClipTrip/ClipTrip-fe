import ListItem_v2 from '@/components/common/ListItem_v2';
import HomePageIcon from '@/components/icons/system/HomePageIcon';
import LocationIcon from '@/components/icons/system/LocationIcon';
import TimeIcon from '@/components/icons/system/TimeIcon';
import PlaceInfoHeader from '@/components/pages/Places/[placeId]/PlaceInfoHeader';
import RecommendedHotels from '@/components/pages/Places/[placeId]/RecommendedHotels';

const PlaceInfoSection = () => {
  return (
    <section className='gap-024 flex flex-col pb-6'>
      <PlaceInfoHeader />

      <div>
        <ListItem_v2
          text='16:00 ~ 22:30'
          Icon={TimeIcon}
        />
        <ListItem_v2
          text='서울특별시 중구 태평로1가'
          Icon={LocationIcon}
        />
        <ListItem_v2
          text='https://colby.info'
          Icon={HomePageIcon}
        />
      </div>

      <RecommendedHotels />
    </section>
  );
};

export default PlaceInfoSection;
