import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import offerPropTypes from '../offer.prop';


function FavoritesList({favoriteOffers}) {
  const offersByCity = new Map();
  favoriteOffers.forEach((offer) => {
    const currentCity = offer.city.name;
    if (offersByCity.has(currentCity)) {
      offersByCity.get(currentCity).push(offer);
    } else {
      const currentOffers = [offer];
      offersByCity.set(currentCity, currentOffers);
    }
  })

  return (
    <ul className="favorites__list">
      {[...offersByCity.keys()]
        .map((city) => <FavoritesItem city={city} key={city} favoriteOffersByCity={offersByCity.get(city)}/>)}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
}

export default FavoritesList;
