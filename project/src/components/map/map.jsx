import React, {memo, useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {MARKER_CURRENT, MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import {useSelector} from 'react-redux';
import {getActiveOfferId} from '../../store/ui/selectors';


function Map({ place, offers }) {

  const activeOfferId = useSelector(getActiveOfferId);
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
      offers.forEach((offer) => {
        const markerIcon = offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon;
        leaflet
          .marker([offer.location.latitude, offer.location.longitude],{icon: markerIcon})
          .addTo(markers);
      });

      markers.addTo(map);
      map.flyTo([place.location.latitude, place.location.longitude], place.location.zoom);

      return () => {
        markers.clearLayers();
      };
    }
  }, [map, offers, place, activeOfferId]);

  return (
    <div style={{height: '100%'}} ref={mapRef} data-testid="map"></div>
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


export default memo(Map);
