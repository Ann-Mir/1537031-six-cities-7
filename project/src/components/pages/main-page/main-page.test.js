import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MainPage from './main-page';
import {AuthorizationStatus, DEFAULT_CITY} from '../../../const';
import {createAPI} from '../../../services/api';
import thunk from 'redux-thunk';

let history;
let store;
let api = null;


describe('Component: MainPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});
  });

  it('should render correctly if data is loaded', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: true,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'test avatar',
          email: 'test@mail.com',
          id: 1,
          isPro: false,
          name: 'Test name',
        },
      },
      UI: {city: 'Amsterdam'},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/test@mail.com/i)).toBeInTheDocument();
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Amsterdam')).toBeInTheDocument();
  });

  it('should render correctly if data is not loaded', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'test avatar',
          email: 'test@mail.com',
          id: 1,
          isPro: false,
          name: 'Test name',
        },
      },
      UI: {city: DEFAULT_CITY},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(screen.queryByText('Loading...')).toBeInTheDocument();
  });
});
