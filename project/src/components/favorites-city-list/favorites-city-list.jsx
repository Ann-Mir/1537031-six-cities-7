import React, {memo} from 'react';
import PlaceCard from '../place-card/place-card';
import {CardTypes} from '../../settings';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';

function FavoritesCityList({ favoriteOffersByCity }) {
  return (
    <div className="favorites__places">
      {
        favoriteOffersByCity.map(
          (offer) =>
            <PlaceCard
              key={offer.id}
              offer={offer}
              cardType={CardTypes.FAVORITES}
            />)
      }
    </div>
  );
}


FavoritesCityList.propTypes = {
  favoriteOffersByCity: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default memo(FavoritesCityList);
