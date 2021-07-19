import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AppRoute} from "../../const";
import Cities from "./cities";


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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: ['http://picsum.photos/248/152?r=1'],
    isFavorite: false,
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
    title: 'Beautiful & luxurious apartment in Amsterdam',
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

const mockCity = 'Amsterdam';

let history;
let store;
const mockStore = configureStore({});


describe('Component: Cities', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      UI: {city: mockCity},
      DATA: {offers: mockOffers}
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoute.ROOT}>
              <Cities />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(screen.getByText(/Beautiful & luxurious house at great location/i)).toBeInTheDocument();
    expect(screen.getByText(/Beautiful & luxurious apartment in Amsterdam/i)).toBeInTheDocument();
  });

  it('should render empty offers list correctly', () => {
    store = mockStore({
      UI: {city: mockCity},
      DATA: {offers: []}
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoute.ROOT}>
              <Cities />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(screen
      .getByText(/We could not find any property available at the moment in Amsterdam/i))
      .toBeInTheDocument();
  });
});
