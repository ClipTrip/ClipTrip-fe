import AppBar from '@/components/common/AppBar';
import ChipsCategory from '@/components/common/ChipsCategory';
import Navigation from '@/components/common/Navigation';
import PlaceSearch from '@/components/pages/Places/PlaceSearch';
import { useTranslation } from 'react-i18next';

import Map from '@/components/common/Map';
import BookmarkListSheet from '@/components/pages/Places/BookmarkListSheet';
import { useMapStore } from '@/store/mapStore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CloseIcon from '@/components/icons/system/CloseIcon';
import { useRef } from 'react';
import SearchSheet from '@/components/pages/Places/SearchSheet';
import type { CategoryCodeType } from '@/types/place';

const Places = () => {
  const { t } = useTranslation([
    'appBar',
    'sectionTitle',
    'buttonAction',
    'chip',
    'menu',
    'textField',
  ]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const query = searchParams.get('query');
  const category = searchParams.get('category');
  const longitude = searchParams.get('longitude');
  const latitude = searchParams.get('latitude');
  const radius = searchParams.get('radius');

  const searchMode = !!(longitude && latitude && radius);

  const map = useMapStore((state) => state.map);
  const clearMarkers = useMapStore((state) => state.clearMarkers);

  const handleKeywordSearch = () => {
    if (map) {
      const mapCenter = map.getCenter();
      navigate(
        `/places?query=${searchRef.current?.value}&longitude=${mapCenter.x}&latitude=${mapCenter.y}&radius=2000`
      );
    }
  };

  const handleCategorySearch = (
    category: CategoryCodeType | CategoryCodeType[] | null
  ) => {
    if (searchRef.current) searchRef.current.value = '';

    if (map && category) {
      const mapCenter = map.getCenter();
      navigate(
        `/places?category=${category}&longitude=${mapCenter.x}&latitude=${mapCenter.y}&radius=2000`
      );
    } else {
      navigate('/places');
      clearMarkers();
    }
  };

  return (
    <>
      {!searchMode && <AppBar title={t('appBar_navi-03')} />}
      {searchMode && (
        <AppBar
          LeadingIcon={CloseIcon}
          onLeadingIconClick={() => {
            if (searchRef.current) searchRef.current.value = '';
            clearMarkers();
            navigate('/places');
          }}
        />
      )}

      <div className='pl-024 gap-012 flex w-[360px] flex-col'>
        <PlaceSearch
          onSearch={handleKeywordSearch}
          defaultValue={query || ''}
          ref={searchRef}
        />
        <ChipsCategory onClick={handleCategorySearch} />
      </div>

      <Map className='h-[calc(100dvh-260px)] [&>div:nth-child(3)]:hidden [&>div:nth-child(4)]:hidden [&>div:nth-child(6)]:hidden [&>div:nth-child(7)]:hidden' />

      {!searchMode && <BookmarkListSheet />}
      {searchMode && query && (
        <SearchSheet searchParams={{ query, longitude, latitude, radius }} />
      )}
      {searchMode && category && (
        <SearchSheet
          searchParams={{
            categoryCode: category as CategoryCodeType,
            longitude,
            latitude,
            radius,
          }}
        />
      )}

      {!searchMode && <Navigation className='absolute bottom-0 z-50' />}
    </>
  );
};

export default Places;
