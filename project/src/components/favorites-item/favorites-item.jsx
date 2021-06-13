import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import PlaceCard from '../place-card/place-card';
import {CardTypes} from '../../settings';

function FavoritesItem(props) {
  const favoriteOffersByCity = props.favoriteOffersByCity;
  const city = props.city;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffersByCity.map(
          (offer) => <PlaceCard
            key={offer.id}
            offer={offer}
            cardType={CardTypes.FAVORITES}
          />)}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoriteOffersByCity: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
}

export default FavoritesItem;
