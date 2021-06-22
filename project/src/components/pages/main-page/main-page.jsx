import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../../places-list/places-list';
import Header from '../../header/header';
import offerPropTypes from '../../offer.prop';
import Map from '../../map/map';
import LocationsList from '../../locations-list/locations-list';
import {DEFAULT_CITY, LOCATIONS} from '../../../const'
import { connect } from 'react-redux';
import offers from "../../../mocks/offers";

function MainPage({ currentOffers, city }) {
  console.log(currentOffers);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" style={{width: '7', height:'4'}}>
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlacesList
                offers={currentOffers}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  place={LOCATIONS.find(({ name }) => name === city)}
                  offers={currentOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const city = state.city;
  const currentOffers = state.offers.filter((offer) => offer.city.name === city);
  return {
    currentOffers: currentOffers,
    city: city,
  }
};

export default connect(mapStateToProps)(MainPage);
