import {
  setActiveOffer,
  setCity,
  setSortType
} from '../action';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOfferId: null,
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
    });
});


export {ui};
