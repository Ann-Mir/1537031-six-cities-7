import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import FavoritesPage from './favorites-page';
import {AuthorizationStatus, DEFAULT_CITY} from '../../../const';
import {createAPI} from '../../../services/api';
import thunk from 'redux-thunk';


const mockOffers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: ['http://picsum.photos/248/152?r=1'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'http://picsum.photos/248/152?r=1',
    price: 120,
    rating: 2.3,
    title: 'Beautiful & luxurious apartment',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Elizabeth'
    },
    id: 2,
    images: ['http://picsum.photos/248/152?r=2'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.36632405116683,
      longitude: 4.835288109409351,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
    price: 220,
    rating: 4.4,
    title: 'Beautiful & luxurious house at great location',
    type: 'house'
  },
];


let history;
let store;
let api = null;


describe('Component: FavoritesPage', () => {
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
        favoriteOffers: mockOffers,
        currentOffer: null,
        isDataLoaded: true,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: true,
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
          <FavoritesPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/test@mail.com/i)).toBeInTheDocument();
    expect(screen.getByText('Beautiful & luxurious house at great location')).toBeInTheDocument()
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
        isDataLoaded: true,
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
          <FavoritesPage />
        </Router>
      </Provider>);

    expect(screen.queryByText('Beautiful & luxurious house at great location')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
  });
});
