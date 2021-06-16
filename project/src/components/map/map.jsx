import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {MARKER_CURRENT, MARKER_DEFAULT} from '../../const';

import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';


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
    if (map) {
      offers.forEach(({ location }) => {
        leaflet
          .marker([location.latitude, location.longitude], {icon: defaultCustomIcon})
          .addTo(map);
      });
    }
  }, [map, offers]);

  // const city = [52.38333, 4.9];
  // const icon = leaflet.icon({
  //   iconUrl: `img/pin.svg`,
  //   iconSize: [30, 30]
  // });
  //
  // const zoom = 12;
  //
  // useEffect(() => {
  //   const map = leaflet.map(mapRef.current, {
  //     center: city,
  //     zoom: zoom,
  //     zoomControl: false,
  //     marker: true
  //   });
  //
  //   map.setView(city, zoom);
  //
  //   leaflet
  //     .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  //     })
  //     .addTo(map);
  //
  //   const offersCoordinates = offers.map(({ location }) => [location.latitude, location.longitude]);
  //
  //   offersCoordinates.forEach((coordinates) => {
  //     leaflet
  //       .marker(coordinates, {icon})
  //       .addTo(map);
  //   });
  //
  // }, [place, offers]);

  return (
      <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
