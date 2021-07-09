import React from 'react';
import NearPlacesList from '../near-places-list/near-places-list';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';


function NearPlaces({ offers }) {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <NearPlacesList nearOffers={offers} />
    </section>
  );
}


NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default NearPlaces;
