import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import PropertyWrapper from './property-wrapper';
import {AuthorizationStatus} from '../../const';


const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    avatarUrl: 'test avatar',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

let history = null;
let store = null;
let api = null;

describe('Component: PropertyWrapper', () => {
  beforeEach(() => {
    api = createAPI(() => {});
    history = createMemoryHistory();
  });

  it('should render correctly for authorized user', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      UI: {
        activeOfferId: null,
      },
      DATA: {
        comments: [],
        offersNearby: [mockOffer],
        currentOffer: mockOffer,
        isOfferLoaded: true,
        areReviewsLoaded: true,
        areLoadedOffersNearby: true,
      },
      USER: { authorizationStatus: AuthorizationStatus.AUTH},
    });
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyWrapper currentOffer={mockOffer} id={'1'}/>
        </Router>
      </Provider>,
    );
    expect(getByText(/A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam./i)).toBeInTheDocument();
    expect(getByTestId('review-form')).toBeInTheDocument();
  });

  it('should render correctly for not authorized user', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      UI: {
        activeOfferId: null,
      },
      DATA: {
        comments: [],
        offersNearby: [mockOffer],
        currentOffer: mockOffer,
        isOfferLoaded: true,
        areReviewsLoaded: true,
        areLoadedOffersNearby: true,
      },
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyWrapper currentOffer={mockOffer} id={'1'}/>
        </Router>
      </Provider>,
    );

    expect(queryByTestId('review-form')).not.toBeInTheDocument();
  });
});
