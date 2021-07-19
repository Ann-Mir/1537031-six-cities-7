import {renderHook} from '@testing-library/react-hooks';
import useMap from './use-map';


const mockCity = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 10,
  },
};

const mapContainer = {
  current: '<section className="map"/>',
};

jest.mock('leaflet', () => ({
  __esModule: true,
  default: {
    map() {
      return 'mock map';
    },
    tileLayer() {
      return this;
    },
    addTo() {
      return this;
    },
    icon() {
      return 'mock icon';
    },
  },
}));


describe('Hook: useMap', () => {

  it('should return map', () => {
    const {result} = renderHook(() =>
      useMap(mapContainer, mockCity),
    );

    expect(result.current).toBe('mock map');
  });
});
