import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus} from '../const';
import {ActionType} from './action';

const initialState = {
  offers: [],
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOfferId: null,
  currentOffer: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isOfferLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  username: '',
  comments: [],
  offersNearby: [],
  hasPostedComment: {
    hasPosted: true,
    comment: '',
    rating: 0,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        username: '',
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload,
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOfferId: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        username: action.payload.email,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      };
    case ActionType.SET_IS_DATA_LOADED:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case ActionType.SET_IS_OFFER_LOADED:
      return {
        ...state,
        isOfferLoaded: action.payload,
      };
    case ActionType.SET_ARE_REVIEWS_LOADED:
      return {
        ...state,
        areReviewsLoaded: action.payload,
      };
    case ActionType.SET_ARE_LOADED_OFFERS_NEARBY:
      return {
        ...state,
        areLoadedOffersNearby: action.payload,
      };
    case ActionType.SET_HAS_POSTED_COMMENT:
      return {
        ...state,
        hasPostedComment: {
          hasPosted: action.payload.hasPosted,
          comment: action.payload.comment,
          rating: action.payload.rating,
        },
      };
    default:
      return state;
  }
};


export {reducer};
