import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import {CardTypes} from '../../settings';
import {getSortedOffers} from '../../utils/common';

function PlacesList ({ offers, activeSortType }) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {getSortedOffers(offers, activeSortType).map((offer) => <PlaceCard
                                  offer={offer}
                                  key={offer.id}
                                  cardType={CardTypes.MAIN}
                                />)}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeSortType: PropTypes.string.isRequired,
};


export default PlacesList;


