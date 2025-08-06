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
      if (!naver || !mapRef.current) return;

      const map = new naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(
          center?.latitude || 37.554059875114014,
          center?.longitude || 126.97069430236104
        ),
        zoom: 14,
      });

      setMap(map);
    };

    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}&language=${language}`;
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      ref={mapRef}
      className={cn('h-full w-full', className)}
      style={style}
    />
  );
};

export default Map;
