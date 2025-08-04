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
import { useState } from 'react';
import SearchSheet from '@/components/pages/Places/SearchSheet';

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
  const query = searchParams.get('query');
  const [search, setSearch] = useState(query ?? '');
  const x = searchParams.get('x');
  const y = searchParams.get('y');
  const radius = searchParams.get('radius');

  const searchMode = !!(query && x && y && radius);

  const map = useMapStore((state) => state.map);

  const handleSearch = (query: string) => {
    if (map) {
      const mapCenter = map.getCenter();
      navigate(
        `/places?query=${query}&x=${mapCenter.x}&y=${mapCenter.y}&radius=20000`
      );
    }
  };

  return (
    <>
      {!searchMode && <AppBar title={t('appBar_navi-03')} />}
      {searchMode && (
        <AppBar
          LeadingIcon={CloseIcon}
          onLeadingIconClick={() => {
            setSearch('');
            navigate(-1);
          }}
        />
      )}

      <div className='pl-024 gap-012 flex w-[360px] flex-col'>
        <PlaceSearch
          onSearch={handleSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ChipsCategory />
      </div>

      <Map className='h-[calc(100dvh-260px)] [&>div:nth-child(3)]:hidden [&>div:nth-child(4)]:hidden [&>div:nth-child(6)]:hidden [&>div:nth-child(7)]:hidden' />

      {!searchMode && <BookmarkListSheet />}
      {searchMode && <SearchSheet searchParams={{ query, x, y, radius }} />}

      {!searchMode && <Navigation className='absolute bottom-0 z-50' />}
    </>
  );
};

export default Places;
