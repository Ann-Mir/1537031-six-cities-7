import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import offerPropTypes from '../../offer.prop';
import {useSelector} from 'react-redux';
import FavoriteOffersWrapper from '../../favorite-offers-wrapper/favorite-offers-wrapper';
import FavoriteOffersEmptyWrapper from '../../favorite-offers-empty-wrapper/favorite-offers-empty-wrapper';
import {getOffers} from '../../../store/data/selectors';

function FavoritesPage() {

  const offers = useSelector(getOffers);

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header />
      {
        favoriteOffers.length > 0
        && <FavoriteOffersWrapper favoriteOffers={favoriteOffers}/>
        || <FavoriteOffersEmptyWrapper />
      }
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};


export default FavoritesPage;
