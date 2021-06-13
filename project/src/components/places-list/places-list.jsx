import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import {CardTypes} from '../../settings';

function PlacesList ({offers}) {
  const [activeOffer, setActiveOffer] = React.useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard
                                  offer={offer}
                                  key={offer.id + i}
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

export default PlacesList;
