import React, {useEffect} from 'react';
import Header from '../../header/header';
import {fetchOffer} from '../../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import PropertyWrapper from '../../property-wrapper/property-wrapper';
import {useParams} from 'react-router';
import {getCurrentOffer, getIsOfferLoadedStatus} from '../../../store/data/selectors';

function RoomPage() {
  const { id } = useParams();

  const currentOffer = useSelector(getCurrentOffer);
  const isOfferLoaded = useSelector(getIsOfferLoadedStatus);

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


export default RoomPage;
