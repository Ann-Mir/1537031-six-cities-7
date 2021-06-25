import React from 'react';
import SortingForm from '../sorting-form/sorting-form';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import {LOCATIONS} from '../../const';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';


function PlacesContainer({ currentOffers, activeSortType, city }) {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} places to stay in {city}</b>
        <SortingForm />
        <PlacesList
          offers={currentOffers}
          activeSortType={activeSortType}
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
  );
}


PlacesContainer.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

export default PlacesContainer;
