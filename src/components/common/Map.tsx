import { cn } from '@/lib/utils';
import { useMapStore } from '@/store/mapStore';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface MapProps {
  className?: string;
  style?: React.CSSProperties;
}

const Map = ({ className, style }: MapProps) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const mapRef = useRef<HTMLDivElement | null>(null);
  const center = useMapStore((state) => state.center);
  const setMap = useMapStore((state) => state.setMap);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.naver || !mapRef.current) return;

      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(
          center?.latitude || 37.554059875114014,
          center?.longitude || 126.97069430236104
        ),
        zoom: 14,
      });

      setMap(map);
    };

    const SCRIPT_ID = 'naver-map-sdk';

    const loadSdk = (lang: string) => {
      const existing = document.getElementById(
        SCRIPT_ID
      ) as HTMLScriptElement | null;
      if (existing) existing.parentElement?.removeChild(existing);

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.setAttribute('data-language', lang);
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}&language=${lang}`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    // initial load
    if (!window.naver?.maps) {
      loadSdk(language);
    } else {
      initializeMap();
    }

    // cross-tab sync: rebuild map when language changes in another tab
    const handleLanguageChange = () => {
      const newLang = localStorage.getItem('language') || language;
      loadSdk(newLang);
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'language' && e.newValue) {
        loadSdk(e.newValue);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
      window.removeEventListener('storage', onStorage);
    };
  }, [language, center?.latitude, center?.longitude, setMap]);

  return (
    <div
      ref={mapRef}
      className={cn(
        'h-full w-full [&>div:nth-child(3)]:hidden [&>div:nth-child(6)]:hidden',
        className
      )}
      style={style}
    />
  );
};

export default Map;
