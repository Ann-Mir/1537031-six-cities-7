import {ActionType} from '../action';

const initialState = {
  offers: [],
  comments: [],
  offersNearby: [],
  currentOffer: null,
  isDataLoaded: false,
  isOfferLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
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
    default:
      return state;
  }
};

export {data};
