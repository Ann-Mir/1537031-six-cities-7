import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import offerPropTypes from '../../offer.prop';
import LocationsList from '../../locations-list/locations-list';
import {LOCATIONS} from '../../../const'
import { connect } from 'react-redux';
import PlacesContainer from '../../places-container/places-container';
import MainEmpty from '../../main-empty/main-empty';

function MainPage({ currentOffers, city, activeSortType }) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${currentOffers.length > 0 ? '' : 'page__main--index-empty'}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS}/>
          </section>
        </div>
        <div className="cities">
          {currentOffers.length > 0
          && <PlacesContainer
                currentOffers={currentOffers}
                city={city}
                activeSortType={activeSortType}
              />
          || <MainEmpty city={city}/>}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const city = state.city;
  const currentOffers = state.offers.filter((offer) => offer.city.name === city);
  return {
    currentOffers: currentOffers,
    city: city,
    activeSortType: state.activeSortType,
  }
};


export default connect(mapStateToProps)(MainPage);
