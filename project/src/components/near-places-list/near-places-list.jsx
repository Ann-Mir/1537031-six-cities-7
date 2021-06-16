import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import PlaceCard from '../place-card/place-card';
import {CardTypes} from '../../settings';

function NearPlacesList({ nearOffers }) {
  return (
    <div className="near-places__list places__list">
      {
        nearOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={CardTypes.NEAR} />)
      }
    </div>
  );
}


NearPlacesList.propTypes = {
  nearOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
}

export default NearPlacesList;
