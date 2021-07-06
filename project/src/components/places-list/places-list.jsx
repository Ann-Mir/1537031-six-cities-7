import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import {CardTypes} from '../../settings';
import {getSortedOffers} from '../../utils/common';
import {setActiveOffer} from '../../store/action';
import {useDispatch} from 'react-redux';

function PlacesList ({ offers, activeSortType }) {

  const dispatch = useDispatch();

  return (
    <div className="cities__places-list places__list tabs__content">
      {getSortedOffers(offers, activeSortType).map((offer) => <PlaceCard
                                  offer={offer}
                                  key={offer.id}
                                  setActiveOffer={setActiveOffer}
                                  cardType={CardTypes.MAIN}
                                  onMouseEnter={() => dispatch(setActiveOffer(+offer.id))}
                                  onMouseLeave={() => dispatch(setActiveOffer(null))}
                                />)}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeSortType: PropTypes.string.isRequired,
};


export default PlacesList;


