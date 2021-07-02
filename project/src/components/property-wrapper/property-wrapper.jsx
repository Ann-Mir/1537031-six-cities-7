import React, {useEffect} from 'react';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyDescription from '../property-description/property-description';
import Reviews from '../reviews/reviews';
import reviews from '../../mocks/reviews';
import {AuthorizationStatus} from '../../const';
import ReviewForm from '../review-form/review-form';
import LoadWrapper from '../load-wrapper/load-wrapper';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import {connect, useDispatch} from 'react-redux';
import {fetchOffersNearby} from '../../store/api-actions';


function PropertyWrapper({ id, currentOffer, areLoadedOffersNearby, offersNearby, authorizationStatus }) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffersNearby(id));
  }, [id, dispatch]);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery images={currentOffer.images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <PropertyDescription offer={currentOffer} />
            <section className="property__reviews reviews">
              <Reviews offerId={id} currentOffer={currentOffer} />
              {
                authorizationStatus === AuthorizationStatus.AUTH
                && <ReviewForm offerId={id}/>
              }
            </section>
          </div>
        </div>
        <section className="property__map map">
          <LoadWrapper isDataLoaded={areLoadedOffersNearby}>
            <Map place={currentOffer.city} offers={[...offersNearby, currentOffer]}/>
          </LoadWrapper>
        </section>
      </section>
      <div className="container">
        <LoadWrapper isDataLoaded={areLoadedOffersNearby}>
          <NearPlaces offers={offersNearby} />
        </LoadWrapper>
      </div>
    </main>
  );
}


const mapStateToProps = (state) => ({
  areLoadedOffersNearby: state.areLoadedOffersNearby,
  offersNearby: state.offersNearby,
  authorizationStatus: state.authorizationStatus,
});


export {PropertyWrapper};
export default connect(mapStateToProps)(PropertyWrapper);
