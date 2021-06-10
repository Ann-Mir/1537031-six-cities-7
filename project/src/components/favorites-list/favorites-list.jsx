import React from 'react';
import FavoritesItem from '../favorites-item/favorites-item';

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

export default FavoritesList;
