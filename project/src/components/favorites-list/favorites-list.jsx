import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import offerPropTypes from '../offer.prop';
import {mapOffersByCity} from '../../utils/common';


function FavoritesList({ favoriteOffers }) {
  const offersByCity = mapOffersByCity(favoriteOffers);

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
