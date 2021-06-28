import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../../const';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import offerPropTypes from '../../offer.prop';
import {connect} from 'react-redux';

function FavoritesPage({ offers }) {

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={favoriteOffers}/>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapStateToProps = ({ offers }) => ({
  offers: offers,
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
