import React, {useEffect} from 'react';
import Header from '../../header/header';
import LocationsList from '../../locations-list/locations-list';
import {LOCATIONS} from '../../../const'
import {useDispatch, useSelector} from 'react-redux';
import Cities from '../../cities/cities';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchOffers} from '../../../store/api-actions';
import {getActiveSortType, getCity} from '../../../store/ui/selectors';
import {getCurrentOffers, getIsDataLoadedStatus} from '../../../store/data/selectors';

function MainPage() {

  const city = useSelector(getCity);
  const currentOffers = useSelector(getCurrentOffers);
  const activeSortType = useSelector(getActiveSortType);
  const isDataLoaded = useSelector(getIsDataLoadedStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
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
          <Cities currentOffers={currentOffers} activeSortType={activeSortType} city={city}/>
        </LoadWrapper>
      </main>
    </div>
  );
}


export default MainPage;
