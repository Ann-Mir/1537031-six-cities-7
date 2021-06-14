import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import FavoritesCityList from '../favorites-city-list/favorites-city-list';

function FavoritesItem({ favoriteOffersByCity, city }) {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoritesCityList favoriteOffersByCity={favoriteOffersByCity} />
    </li>
  );
}

FavoritesItem.propTypes = {
  favoriteOffersByCity: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesItem;
