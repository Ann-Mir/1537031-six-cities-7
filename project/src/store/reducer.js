import {DEFAULT_CITY} from '../const';
import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  offers: offers,
  city: DEFAULT_CITY,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
