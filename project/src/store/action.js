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
  SET_HAS_POSTED_COMMENT: 'comments/setHasPostedComment',
};

export const setCity = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

export const setSortType = (sortType) => ({
  type: ActionType.SET_SORT_TYPE,
  payload: sortType,
});

export const setActiveOffer = (activeOfferId) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: activeOfferId,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setUser = (userData) => ({
  type: ActionType.SET_USER,
  payload: userData,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadOffersNearby = (offers) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offers,
});

export const setIsDataLoaded = (isLoaded) => ({
  type: ActionType.SET_IS_DATA_LOADED,
  payload: isLoaded,
});

export const setOfferLoadingStatus = (isLoaded) => ({
  type: ActionType.SET_IS_OFFER_LOADED,
  payload: isLoaded,
});

export const setAreReviewsLoaded = (areLoaded) => ({
  type: ActionType.SET_ARE_REVIEWS_LOADED,
  payload: areLoaded,
});

export const setAreLoadedOffersNearby = (areLoaded) => ({
  type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
  payload: areLoaded,
});

export const setHasPostedComment = (hasPosted) => ({
  type: ActionType.SET_HAS_POSTED_COMMENT,
  payload: hasPosted,
});

