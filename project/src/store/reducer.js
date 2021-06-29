import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus} from '../const';
import {ActionType} from './action';

const initialState = {
  offers: [],
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOfferId: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  username: '',
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
    default:
      return state;
  }
};


export {reducer};
