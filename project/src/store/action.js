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

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  setActiveOffer: (activeOfferId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOfferId,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUser: (userData) => ({
    type: ActionType.SET_USER,
    payload: userData,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  loadOffersNearby: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers,
  }),
  setIsDataLoaded: (isLoaded) => ({
    type: ActionType.SET_IS_DATA_LOADED,
    payload: isLoaded,
  }),
  setOfferLoadingStatus: (isLoaded) => ({
    type: ActionType.SET_IS_OFFER_LOADED,
    payload: isLoaded,
  }),
  setAreReviewsLoaded: (areLoaded) => ({
    type: ActionType.SET_ARE_REVIEWS_LOADED,
    payload: areLoaded,
  }),
  setAreLoadedOffersNearby: (areLoaded) => ({
    type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
    payload: areLoaded,
  }),
  setHasPostedComment: (hasPosted) => ({
    type: ActionType.SET_HAS_POSTED_COMMENT,
    payload: hasPosted,
  })
};
