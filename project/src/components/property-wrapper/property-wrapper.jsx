import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyDescription from '../property-description/property-description';
import Reviews from '../reviews/reviews';
import {AuthorizationStatus} from '../../const';
import ReviewForm from '../review-form/review-form';
import LoadWrapper from '../load-wrapper/load-wrapper';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOffersNearby} from '../../store/api-actions';
import {setActiveOffer} from '../../store/action';
import {getAreLoadedOffersNearbyStatus, getOffersNearby} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';


function PropertyWrapper({ id, currentOffer }) {

  const areLoadedOffersNearby = useSelector(getAreLoadedOffersNearbyStatus);
  const offersNearby = useSelector(getOffersNearby);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffersNearby(id));
    dispatch(setActiveOffer(Number(+id)));
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


PropertyWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  currentOffer: offerPropTypes,
};


export default memo(PropertyWrapper);
