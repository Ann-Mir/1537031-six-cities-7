import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../const';
import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  offers: offers,
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOfferId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};


export {reducer};
