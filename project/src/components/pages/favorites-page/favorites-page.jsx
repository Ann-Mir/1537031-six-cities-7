import React, {useEffect} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import FavoriteOffersWrapper from '../../favorite-offers-wrapper/favorite-offers-wrapper';
import FavoriteOffersEmptyWrapper from '../../favorite-offers-empty-wrapper/favorite-offers-empty-wrapper';
import {getFavoriteOffers, getFavoriteOffersLoadingStatus} from '../../../store/data/selectors';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchFavoriteOffers} from '../../../store/api-actions';

function FavoritesPage() {

  const areFavoriteOffersLoaded = useSelector(getFavoriteOffersLoadingStatus);
  const favoriteOffers = useSelector(getFavoriteOffers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <LoadWrapper isDataLoaded={areFavoriteOffersLoaded}>
        {
          favoriteOffers.length > 0
          && <FavoriteOffersWrapper favoriteOffers={favoriteOffers}/>
          || <FavoriteOffersEmptyWrapper />
        }
      </LoadWrapper>
      <Footer />
    </div>
  );
}


export default FavoritesPage;
