import React from 'react';
import {capitalizeFirstLetter, getRating} from '../../utils/render';
import FeaturesList from '../feautes-list/features-list';
import PropertyOwner from '../property-owner/property-owner';
import offerPropTypes from '../offer.prop';


function PropertyDescription({ offer }) {
  const {
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;
  const ratingWidth = getRating(rating);

  return (
    <React.Fragment>
      <div className={`property__mark ${isPremium ? '' : 'visually-hidden'}`}>
        <span>Premium</span>
      </div>
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" style={{width: '31', height: '33'}}>
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${ratingWidth}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {capitalizeFirstLetter(type)}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {`${bedrooms} Bedroom${bedrooms > 1 ? 's' : ''}`}
        </li>
        <li className="property__feature property__feature--adults">
          {`Max ${maxAdults} adult${maxAdults === 1 ? '' : 's'}`}
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <FeaturesList goods={goods} />
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <PropertyOwner host={host} />

        <div className="property__description">
          <p className="property__text">
            {description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}


PropertyDescription.propTypes = {
  offer: offerPropTypes.isRequired,
};

export default PropertyDescription;
