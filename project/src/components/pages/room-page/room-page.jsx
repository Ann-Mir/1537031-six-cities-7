import React, {useEffect, useState} from 'react';
import Header from '../../header/header';
import PropertyGallery from '../../property-gallery/property-gallery';
import reviews from '../../../mocks/reviews';
import offerPropTypes from '../../offer.prop';
import Map from '../../map/map';
import PropTypes from 'prop-types';
import Reviews from '../../reviews/reviews';
import NearPlaces from '../../near-places/near-places';
import PropertyDescription from '../../property-description/property-description';
import {fetchOffer} from "../../../store/api-actions";
import {connect, useDispatch} from "react-redux";
import LoadWrapper from "../../load-wrapper/load-wrapper";
import LoadingScreen from "../../loading-screen/loadingScreen";

function RoomPage(props) {
  const { id, offers, currentOffer, onReviewSubmit, isOfferLoaded } = props;
  //const { images, city  } = currentOffer;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffer(id));
  }, [id])

  return (
    <div className="page">
      <Header />
      <LoadWrapper isDataLoaded={isOfferLoaded}>
        {
          currentOffer
          && <main className="page__main page__main--property">
                <section className="property">
                  <PropertyGallery images={currentOffer.images}/>
                  <div className="property__container container">
                    <div className="property__wrapper">
                      <PropertyDescription offer={currentOffer} />
                      <Reviews offerId={id} currentOffer={currentOffer} reviews={reviews} onReviewSubmit={onReviewSubmit} />
                    </div>
                  </div>
                  <section className="property__map map">
                    <Map place={currentOffer && currentOffer.city} offers={offers}/>
                  </section>
                </section>
                <div className="container">
                  <NearPlaces offers={offers} />
                </div>
              </main>
        }
      </LoadWrapper>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  currentOffer: offerPropTypes,
  onReviewSubmit: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
  isOfferLoaded: state.isOfferLoaded,
});

export {RoomPage};

export default connect(mapStateToProps)(RoomPage);
