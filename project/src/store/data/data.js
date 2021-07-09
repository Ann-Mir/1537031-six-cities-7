import {
  loadComments, loadFavoriteOffers,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  setAreLoadedOffersNearby,
  setAreReviewsLoaded, setFavoriteOffersLoadingStatus,
  setIsDataLoaded,
  setOfferLoadingStatus, updateOffer
} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {removeOffer, updateOfferIsFavorite, updateOffers} from '../../utils/common';

const initialState = {
  offers: [],
  comments: [],
  offersNearby: [],
  favoriteOffers: [],
  currentOffer: null,
  isDataLoaded: false,
  isOfferLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  areFavoriteOffersLoaded: false,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoaded = action.payload;
    })
    .addCase(setAreReviewsLoaded, (state, action) => {
      state.areReviewsLoaded = action.payload;
    })
    .addCase(setAreLoadedOffersNearby, (state, action) => {
      state.areLoadedOffersNearby = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.offers = updateOffers(state.offers, action.payload);
      state.favoriteOffers = removeOffer(state.favoriteOffers, action.payload);
      state.currentOffer = updateOfferIsFavorite(state.currentOffer, action.payload);
      state.offersNearby = updateOffers(state.offersNearby, action.payload);
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      state.areFavoriteOffersLoaded = true;
    })
    .addCase(setFavoriteOffersLoadingStatus, (state, action) => {
      state.areFavoriteOffersLoaded = action.payload;
    });
});

export {data};
