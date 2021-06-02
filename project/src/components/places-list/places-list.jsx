import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';

function PlacesList ({placesCount}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {new Array(placesCount).fill(null).map((place, i) => <PlaceCard key={i}/>)}
    </div>
  );
}

PlacesList.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default PlacesList;
