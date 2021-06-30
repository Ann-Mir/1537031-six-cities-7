import React from 'react';
import Header from '../../header/header';
import PropertyGallery from '../../property-gallery/property-gallery';
import reviews from '../../../mocks/reviews';
import offerPropTypes from '../../offer.prop';
import Map from '../../map/map';
import PropTypes from 'prop-types';
import Reviews from '../../reviews/reviews';
import NearPlaces from '../../near-places/near-places';
import PropertyDescription from '../../property-description/property-description';

function RoomPage(props) {
  const { offers, currentOffer, onReviewSubmit } = props;
  const { images, city  } = currentOffer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyDescription offer={currentOffer} />
              <Reviews currentOffer={currentOffer} reviews={reviews} onReviewSubmit={onReviewSubmit} />
            </div>
          </div>
          <section className="property__map map">
            <Map place={city} offers={offers}/>
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={offers} />
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  currentOffer: offerPropTypes.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
};

export default RoomPage;
