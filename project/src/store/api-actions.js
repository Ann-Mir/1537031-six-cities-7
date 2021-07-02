import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute, RESPONSE_SUCCESS} from '../const';
import {adaptCommentToClient, adaptOfferToClient, adaptUserToClient} from '../adapter/adapter';

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
  dispatch(ActionCreator.setOfferLoadingStatus(false));
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      const offer = adaptOfferToClient(data);
      dispatch(ActionCreator.loadOffer(offer));
    })
    .then(() => dispatch(ActionCreator.setOfferLoadingStatus(true)))
    .catch(() => {
      dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND));
    })
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setAreReviewsLoaded(false));
  api.get(`/comments/${id}`)
    .then(({data}) => {
      const comments = data.map((comment) => adaptCommentToClient(comment));
      dispatch(ActionCreator.loadComments(comments))
    })
    .catch(() => dispatch(ActionCreator.loadComments([])))
    .finally(() => dispatch(ActionCreator.setAreReviewsLoaded(true)))
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setAreLoadedOffersNearby(false));
  api.get(`/hotels/${id}/nearby`)
    .then(({ data }) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      dispatch(ActionCreator.loadOffersNearby(offers))
    })
    .catch(() => dispatch(ActionCreator.loadOffersNearby([])))
    .finally(() => dispatch(ActionCreator.setAreLoadedOffersNearby(true)))
};

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setAreReviewsLoaded(false));
  return api.post(`/comments/${id}`, {comment, rating})
    .then((response) => {
      const { status, data } = response;
      if (status !== RESPONSE_SUCCESS) {
        dispatch(ActionCreator.setHasPostedComment({hasPosted: false, comment: comment, rating: rating}));
      } else {
        const comments = data.map(adaptCommentToClient);
        dispatch(ActionCreator.loadComments(comments));
        dispatch(ActionCreator.setAreReviewsLoaded(true));
      }
    })
    .catch(() => {

    })
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setUser(adaptUserToClient(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
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
