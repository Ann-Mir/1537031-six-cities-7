import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';

function PlacesList ({offers}) {
  const [activeOffer, setActiveOffer] = React.useState(null);
  console.log(activeOffer);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard
                                  offer={offer}
                                  key={offer.id + i}
                                  setActiveOffer={setActiveOffer}
                                />)}
    </div>
  );
}

PlacesList.propTypes = {
};

export default PlacesList;
