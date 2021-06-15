import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

function Map({place, offers}) {
  const mapContainer = useRef(null);
  const city = [52.38333, 4.9];
  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const zoom = 12;

  useEffect(() => {
    const map = leaflet.map(mapContainer.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      })
      .addTo(map);

    const offersCoordinates = offers.map(({ location }) => [location.latitude, location.longitude]);

    offersCoordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon})
        .addTo(map);
    });

  }, [place, offers]);

  return (
    <section className="cities__map map">
      <div style={{height: '100%'}} id="map" ref={mapContainer}></div>
    </section>
  );
}

export default Map;
