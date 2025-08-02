import { create } from 'zustand';

interface MapState {
  map?: naver.maps.Map;
  setMap: (map: naver.maps.Map) => void;
}

export const useMapStore = create<MapState>((set) => ({
  map: undefined,
  setMap: (map) => set({ map }),
}));
