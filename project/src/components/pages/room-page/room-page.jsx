import React, {useEffect} from 'react';
import Header from '../../header/header';
import PropertyGallery from '../../property-gallery/property-gallery';
import reviews from '../../../mocks/reviews';
import offerPropTypes from '../../offer.prop';
import Map from '../../map/map';
import PropTypes from 'prop-types';
import Reviews from '../../reviews/reviews';
import NearPlaces from '../../near-places/near-places';
import PropertyDescription from '../../property-description/property-description';
import {fetchOffer, fetchOffersNearby} from '../../../store/api-actions';
import {connect, useDispatch} from 'react-redux';
import LoadWrapper from '../../load-wrapper/load-wrapper';

function RoomPage(props) {
  const { id, currentOffer, onReviewSubmit, isOfferLoaded, areLoadedOffersNearby, offersNearby } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchOffersNearby(id));
  }, [id, dispatch]);

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
                  <LoadWrapper isDataLoaded={areLoadedOffersNearby}>
                    <Map place={currentOffer.city} offers={offersNearby}/>
                  </LoadWrapper>
                </section>
              </section>
              <div className="container">
                <LoadWrapper isDataLoaded={areLoadedOffersNearby}>
                  <NearPlaces offers={offersNearby} />
                </LoadWrapper>
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
  areLoadedOffersNearby: state.areLoadedOffersNearby,
  offersNearby: state.offersNearby,
});

export {RoomPage};

export default connect(mapStateToProps)(RoomPage);
