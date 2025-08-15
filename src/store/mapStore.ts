import { create } from 'zustand';

interface MapState {
  map?: naver.maps.Map;
  setMap: (map: naver.maps.Map) => void;

  center?: {
    latitude: number;
    longitude: number;
  };
  setCenter: (lat: number, lon: number) => void;

  markers: naver.maps.Marker[];
  addMarker: (marker: naver.maps.Marker) => void;
  clearMarkers: () => void;

  polylines: naver.maps.Polyline[];
  addPolyline: (polyline: naver.maps.Polyline) => void;
  clearPolyline: () => void;
}

export const useMapStore = create<MapState>((set, get) => ({
  map: undefined,
  setMap: (map) => set({ map }),

  center: undefined,
  setCenter: (latitude, longitude) =>
    set(() => ({ center: { latitude, longitude } })),

  markers: [],
  addMarker: (marker) =>
    set((state) => ({
      markers: [...state.markers, marker],
    })),
  clearMarkers: () => {
    const { markers } = get();
    markers.forEach((marker) => marker.setMap(null));
    set({ markers: [] });
  },

  polylines: [],
  addPolyline: (polyline) =>
    set((state) => ({
      polylines: [...state.polylines, polyline],
    })),
  clearPolyline: () => {
    const { polylines } = get();
    polylines.forEach((polyline) => polyline.setMap(null));
    set({ polylines: [] });
  },
}));
