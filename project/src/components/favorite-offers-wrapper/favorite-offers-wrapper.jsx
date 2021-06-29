import React from 'react';
import FavoritesList from '../favorites-list/favorites-list';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';


function FavoriteOffersWrapper({ favoriteOffers }) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favoriteOffers={favoriteOffers}/>
        </section>
      </div>
    </main>
  );
}


FavoriteOffersWrapper.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
};


export default FavoriteOffersWrapper;
