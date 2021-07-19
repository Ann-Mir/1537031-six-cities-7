import React, {memo, useEffect, useState} from 'react';
import Header from '../../header/header';
import LocationsList from '../../locations-list/locations-list';
import {LOCATIONS, ToastMessages} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import Cities from '../../cities/cities';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchOffers} from '../../../store/api-actions';
import {getCurrentOffers, getIsDataLoadedStatus} from '../../../store/data/selectors';
import {loadOffers} from '../../../store/action';
import Toast from '../../toast/toast';

function MainPage() {

  const currentOffers = useSelector(getCurrentOffers);
  const isDataLoaded = useSelector(getIsDataLoadedStatus);

  const[isServerUnavailable, setIsServerUnavailable] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers())
      .catch(() => {
        dispatch(loadOffers([]));
        setIsServerUnavailable(true);
      });
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${currentOffers.length > 0 ? '' : 'page__main--index-empty'}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS}/>
          </section>
        </div>
        <LoadWrapper isDataLoaded={isDataLoaded}>
          {isServerUnavailable && <Toast message={ToastMessages.OFFLINE} />}
          <Cities />
        </LoadWrapper>
      </main>
    </div>
  );
}


export default memo(MainPage);
