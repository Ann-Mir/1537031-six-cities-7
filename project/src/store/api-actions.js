import {
  loadComments,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  logout as logoutUser,
  redirectToRoute,
  requireAuthorization,
  setAreLoadedOffersNearby,
  setAreReviewsLoaded,
  setHasPostedComment,
  setOfferLoadingStatus,
  setUser, updateOffer
} from './action';
import {AuthorizationStatus, APIRoute, AppRoute, RESPONSE_SUCCESS} from '../const';
import {adaptCommentToClient, adaptOfferToClient, adaptUserToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      dispatch(loadOffers(offers))
    })
    .catch(() => {
      dispatch(loadOffers([]));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setOfferLoadingStatus(false));
  api.get(`${APIRoute.OFFERS}${id}`)
    .then(({data}) => {
      const offer = adaptOfferToClient(data);
      dispatch(loadOffer(offer));
    })
    .then(() => dispatch(setOfferLoadingStatus(true)))
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.NOT_FOUND));
    })
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(setAreReviewsLoaded(false));
  api.get(`${APIRoute.REVIEWS}${id}`)
    .then(({data}) => {
      const comments = data.map((comment) => adaptCommentToClient(comment));
      dispatch(loadComments(comments))
    })
    .catch(() => dispatch(loadComments([])))
    .finally(() => dispatch(setAreReviewsLoaded(true)))
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  dispatch(setAreLoadedOffersNearby(false));
  api.get(`${APIRoute.OFFERS}${id}${APIRoute.NEARBY}`)
    .then(({ data }) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      dispatch(loadOffersNearby(offers))
    })
    .catch(() => dispatch(loadOffersNearby([])))
    .finally(() => dispatch(setAreLoadedOffersNearby(true)))
};

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(setAreReviewsLoaded(false));
  return api.post(`${APIRoute.REVIEWS}${id}`, {comment, rating})
    .then((response) => {
      const { status, data } = response;
      if (status !== RESPONSE_SUCCESS) {
        dispatch(setHasPostedComment({hasPosted: false, comment: comment, rating: rating}));
      } else {
        const comments = data.map(adaptCommentToClient);
        dispatch(loadComments(comments));
        dispatch(setAreReviewsLoaded(true));
      }
    })
    .catch(() => {

    })
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(setUser(adaptUserToClient(data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUser(adaptUserToClient(data)));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutUser()))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const addToFavorites = ({hotel_id: offerId, status: status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${offerId}/${status}`)
    .then(({data}) => dispatch(updateOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(APIRoute.LOGIN)))
);
