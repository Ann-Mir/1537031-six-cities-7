import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import {CardTypes} from '../../settings';
import {getSortedOffers} from '../../utils/common';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

function PlacesList ({ offers, activeSortType, setActiveOffer }) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {getSortedOffers(offers, activeSortType).map((offer) => <PlaceCard
                                  offer={offer}
                                  key={offer.id}
                                  setActiveOffer={setActiveOffer}
                                  cardType={CardTypes.MAIN}
                                  onMouseEnter={() => setActiveOffer(offer.id)}
                                  onMouseLeave={() => setActiveOffer(null)}
                                />)}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(activeOfferId) {
    dispatch(ActionCreator.setActiveOffer(activeOfferId));
  },
});


export { PlacesList };
export default connect(null, mapDispatchToProps)(PlacesList);

