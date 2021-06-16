import React from 'react';
import Header from '../../header/header';
import ReviewForm from '../../review-form/review-form';
import PropertyGallery from '../../property-gallery/property-gallery';
import {capitalizeFirstLetter, getRating} from "../../../utils/render";
import FeaturesList from '../../feautes-list/features-list';
import PropertyOwner from '../../property-owner/property-owner';
import reviews from '../../../mocks/reviews';
import ReviewsItem from '../../reviews-item/reviews-item';
import offerPropTypes from '../../offer.prop';
import Map from '../../map/map';
import PropTypes from 'prop-types';
import NearPlacesList from '../../near-places-list/near-places-list';
import {amsterdam} from '../../../mocks/city';

function RoomPage(props) {
  const { offers, currentOffer, onReviewSubmit } = props;
  const {
    images,
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
  } = currentOffer;
  const ratingWidth = getRating(rating);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
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
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
                </ul>
                <ReviewForm offer={currentOffer} onReviewSubmit={onReviewSubmit}/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map place={amsterdam} offers={offers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList nearOffers={offers} />
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  currentOffer: offerPropTypes,
  onReviewSubmit: PropTypes.func.isRequired,
};

export default RoomPage;
