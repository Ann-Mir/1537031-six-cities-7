import {createAction} from '@reduxjs/toolkit';


export const ActionType = {
  SET_CITY: 'cities/setCity',
  SET_SORT_TYPE: 'setSortType',
  SET_ACTIVE_OFFER: 'offers/setActiveOffer',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_OFFER: 'offers/loadOffer',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  LOAD_COMMENTS: 'comments/loadComments',
  LOAD_OFFERS_NEARBY: 'offers/loadOffersNearby',
  SET_IS_DATA_LOADED: 'cities/isLoaded',
  SET_IS_OFFER_LOADED: 'offers/setIsOfferLoaded',
  SET_ARE_REVIEWS_LOADED: 'offers/setAreReviewsLoaded',
  SET_ARE_LOADED_OFFERS_NEARBY: 'offers/setAreLoadedOffersNearby',
  UPDATE_OFFER: 'offers/updateOffer',
  LOAD_FAVORITE_OFFERS: 'offers/loadFavoriteOffers',
  SET_ARE_FAVORITE_OFFERS_LOADED: 'offers/setAreFavoriteOffersLoaded',
  SET_REVIEW_ERROR_STATUS: 'comments/setReviewErrorStatus',
};

export const setCity = createAction(ActionType.SET_CITY, (city) => ({
  payload: city,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (activeOfferId) => ({
  payload: activeOfferId,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUser = createAction(ActionType.SET_USER, (userData) => ({
  payload: userData,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => ({
  payload: offers,
}));

export const setIsDataLoaded = createAction(ActionType.SET_IS_DATA_LOADED, (isLoaded) => ({
  payload: isLoaded,
}));

export const setOfferLoadingStatus = createAction(ActionType.SET_IS_OFFER_LOADED, (isLoaded) => ({
  payload: isLoaded,
}));

export const setAreReviewsLoaded = createAction(ActionType.SET_ARE_REVIEWS_LOADED, (areLoaded) => ({
  payload: areLoaded,
}));

export const setAreLoadedOffersNearby = createAction(ActionType.SET_ARE_LOADED_OFFERS_NEARBY, (areLoaded) => ({
  payload: areLoaded,
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));

export const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (offers) => ({
  payload: offers,
}));

export const setFavoriteOffersLoadingStatus = createAction(ActionType.SET_ARE_FAVORITE_OFFERS_LOADED, (status) => ({
  payload: status,
}));
