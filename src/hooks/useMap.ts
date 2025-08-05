import { useMapStore } from '@/store/mapStore';
import { useEffect } from 'react';

interface usePlaceMarkerProps {
  places?: { latitude: number; longitude: number }[];
}

export const usePlaceMarker = ({ places }: usePlaceMarkerProps) => {
  const map = useMapStore((state) => state.map);
  const addMarker = useMapStore((state) => state.addMarker);
  const clearMarkers = useMapStore((state) => state.clearMarkers);

  useEffect(() => {
    clearMarkers();
    if (!map || !places?.length) return;

    places.forEach((place) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(place.latitude, place.longitude),
        map,
      });
      addMarker(marker);
    });
  }, [places]);
};

interface usePlaceCenterProps {
  latitude: number;
  longitude: number;
}

export const usePlaceCenter = (coords?: usePlaceCenterProps) => {
  const map = useMapStore((state) => state.map);
  const setCenter = useMapStore((state) => state.setCenter);

  useEffect(() => {
    if (!map || !coords) return;

    const { latitude, longitude } = coords;

    const center = new naver.maps.LatLng(latitude, longitude);
    map.setCenter(center);
    setCenter(latitude, longitude);
  }, [coords, map, setCenter]);
};
