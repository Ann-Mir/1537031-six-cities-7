import {
  setActiveOffer,
  setCity,
  setHasPostedComment,
  setSortType,
} from '../action';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOfferId: null,
  hasPostedComment: {
    hasPosted: true,
    comment: '',
    rating: 0,
  },
};


const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(setHasPostedComment, (state, action) => {
      state.hasPostedComment = {
        hasPosted: action.payload.hasPosted,
        comment: action.payload.comment,
        rating: action.payload.rating,
      };
    })
});


export {ui};
