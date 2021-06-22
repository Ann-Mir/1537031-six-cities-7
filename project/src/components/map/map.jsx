import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {MARKER_CURRENT, MARKER_DEFAULT} from '../../const';

import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';


function Map({place, offers}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, place);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      offers.forEach(({ location }) => {
        leaflet
          .marker([location.latitude, location.longitude], {icon: defaultCustomIcon})
          .addTo(markers);
      });

      markers.addTo(map);
      map.flyTo([place.location.latitude, place.location.longitude], place.location.zoom);

      return () => {
        markers.clearLayers();
      }
    }
  }, [map, offers]);

  return (
      <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  place: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Map;