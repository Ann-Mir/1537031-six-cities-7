import React, {useEffect} from 'react';
import Header from '../../header/header';
import offerPropTypes from '../../offer.prop';
import PropTypes from 'prop-types';
import {fetchOffer} from '../../../store/api-actions';
import {connect, useDispatch} from 'react-redux';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import PropertyWrapper from '../../property-wrapper/property-wrapper';
import {useParams} from 'react-router';

function RoomPage({ currentOffer, isOfferLoaded }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
  }, [id, dispatch]);

  return (
    <div className="page">
      <Header />
      <LoadWrapper isDataLoaded={isOfferLoaded}>
        {
          currentOffer && <PropertyWrapper id={id} currentOffer={currentOffer}/>
        }
      </LoadWrapper>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  currentOffer: offerPropTypes,
};

const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
  isOfferLoaded: state.isOfferLoaded,
});


export {RoomPage};
export default connect(mapStateToProps)(RoomPage);
