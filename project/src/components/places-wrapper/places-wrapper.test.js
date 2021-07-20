import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PlacesWrapper from './places-wrapper';
import {createAPI} from '../../services/api';
import thunk from 'redux-thunk';
import {DEFAULT_SORT_TYPE} from '../../const';


const mockOffers = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
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
    title: 'Test title',
    type: 'house'
  },
];

let history;
let store;
let api = null;


describe('Component: PlacesWrapper', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});
  });

  it('should render correctly if data is loaded', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        offers: mockOffers,
      },
      UI: {
        city: 'Amsterdam',
        activeSortType: DEFAULT_SORT_TYPE,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <PlacesWrapper city={'Amsterdam'} currentOffers={mockOffers}/>
        </Router>
      </Provider>);

    expect(getByText(/2 places to stay in Amsterdam/i)).toBeInTheDocument();
  });
});
