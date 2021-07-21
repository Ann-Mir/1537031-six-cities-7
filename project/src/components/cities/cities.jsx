import React, {memo} from 'react';
import PlacesWrapper from '../places-wrapper/places-wrapper';
import MainEmpty from '../main-empty/main-empty';
import {useSelector} from 'react-redux';
import {getCurrentOffers} from '../../store/data/selectors';
import {getCity} from '../../store/ui/selectors';
import {EMPTY_OFFERS_LENGTH} from '../../const';


function Cities() {

  const currentOffers = useSelector(getCurrentOffers);
  const city = useSelector(getCity);

  return (
    <div className="cities">
      {
        (currentOffers.length > EMPTY_OFFERS_LENGTH
        &&
        <PlacesWrapper
          currentOffers={currentOffers}
          city={city}
        />)
        || <MainEmpty city={city}/>
      }
    </div>
  );
}


export default memo(Cities);
