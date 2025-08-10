import { useMapStore } from '@/store/mapStore';
import type { CategoryType } from '@/types/place';
import { useEffect } from 'react';

interface usePlaceMarkerProps {
  places?: { latitude: number; longitude: number }[];
  pin?: CategoryType | CategoryType[];
}

const PIN: { id: CategoryType; src: string }[] = [
  { id: 'RESTAURANT', src: '/pin-category 01.png' },
  { id: 'CAFE', src: '/pin-category 02.png' },
  { id: 'ACCOMMODATION', src: '/pin-category 03.png' },
  { id: 'CULTURAL_FACILITY', src: '/pin-category 04.png' },
  { id: 'PUBLIC_INSTITUTION', src: '/pin-category 05.png' },
  { id: 'PARKING_LOT', src: '/pin-category 06.png' },
  { id: 'LUGGAGE_STORAGE', src: '/pin-category 07.png' },
];

export const usePlaceMarker = ({ places, pin }: usePlaceMarkerProps) => {
  const map = useMapStore((state) => state.map);
  const addMarker = useMapStore((state) => state.addMarker);
  const clearMarkers = useMapStore((state) => state.clearMarkers);
  const pinImg = Array.isArray(pin)
    ? pin.map((p) => PIN.find(({ id }) => id === p)?.src)
    : PIN.find(({ id }) => id === pin)?.src;

  useEffect(() => {
    clearMarkers();
    if (!map || !places?.length) return;

    places.forEach((place, idx) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(place.latitude, place.longitude),
        map,
        icon: pinImg && Array.isArray(pinImg) ? pinImg[idx] : pinImg,
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
