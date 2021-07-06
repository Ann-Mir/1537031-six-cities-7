import {ActionType} from '../action';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOfferId: null,
  hasPostedComment: {
    hasPosted: true,
    comment: '',
    rating: 0,
  }
};

const ui = (state = initialState, action) => {
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

export {ui};
