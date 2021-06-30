import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptCommentToClient, adaptOfferToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      dispatch(ActionCreator.loadOffers(offers))
    })
    .catch(() => {
      dispatch(ActionCreator.loadOffers([]));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsOfferLoaded(false));
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      const offer = adaptOfferToClient(data);
      dispatch(ActionCreator.loadOffer(offer));
    })
    .then(() => dispatch(ActionCreator.setIsOfferLoaded(true)))
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setAreReviewsLoaded(false));
  api.get(`/comments/${id}`)
    .then(({data}) => {
      const comments = data.map((comment) => adaptCommentToClient(comment));
      dispatch(ActionCreator.loadComments(comments))
    })
    .then(() => dispatch(ActionCreator.setAreReviewsLoaded(true)))
    .catch(() => dispatch(ActionCreator.loadComments([])))
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setAreLoadedOffersNearby(false));
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      console.log(offers);
      dispatch(ActionCreator.loadOffersNearby(offers))
    })
    .then(() => dispatch(ActionCreator.setAreLoadedOffersNearby(true)))
    .catch(() => dispatch(ActionCreator.loadOffersNearby([])))
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);
