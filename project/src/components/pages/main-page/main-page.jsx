import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import offerPropTypes from '../../offer.prop';
import LocationsList from '../../locations-list/locations-list';
import {LOCATIONS} from '../../../const'
import {connect, useDispatch} from 'react-redux';
import Cities from '../../cities/cities';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchOffers} from '../../../store/api-actions';

function MainPage({ currentOffers, city, activeSortType, isDataLoaded }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

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
        <LoadWrapper isDataLoaded={isDataLoaded}>
          <Cities currentOffers={currentOffers} activeSortType={activeSortType} city={city}/>
        </LoadWrapper>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const city = state.city;
  const currentOffers = state.offers.filter((offer) => offer.city.name === city);
  return {
    currentOffers: currentOffers,
    city: city,
    activeSortType: state.activeSortType,
    isDataLoaded: state.isDataLoaded,
  }
};


export default connect(mapStateToProps)(MainPage);
