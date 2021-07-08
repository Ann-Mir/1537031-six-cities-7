import {
  logout,
  requireAuthorization,
  setUser
} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
};


const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.user = {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      }
    })
    .addCase(setUser, (state, action) => {
      state.user = {
        avatarUrl: action.payload.avatarUrl,
        email: action.payload.email,
        id: action.payload.id,
        isPro: action.payload.isPro,
        name: action.payload.name,
      }
    })
});

export {user};
