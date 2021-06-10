import React from 'react';
import FavoriteCard from '../favorite-card/favorite-card';

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
        {favoriteOffersByCity.map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

export default FavoritesItem;
