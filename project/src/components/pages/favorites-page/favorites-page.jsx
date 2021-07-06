import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import offerPropTypes from '../../offer.prop';
import {connect} from 'react-redux';
import FavoriteOffersWrapper from '../../favorite-offers-wrapper/favorite-offers-wrapper';
import FavoriteOffersEmptyWrapper from '../../favorite-offers-empty-wrapper/favorite-offers-empty-wrapper';

function FavoritesPage({ offers }) {

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

const mapStateToProps = ({ DATA }) => ({
  offers: DATA.offers,
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
