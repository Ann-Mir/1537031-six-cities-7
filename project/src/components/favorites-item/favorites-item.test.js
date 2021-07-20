import React from 'react';
import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, DEFAULT_CITY} from '../../const';
import FavoritesItem from './favorites-item';
import userEvent from '@testing-library/user-event';
import {ActionType} from '../../store/action';


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

const mockCity = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  },
  name: 'Amsterdam',
};

let history;
let store;
const mockStore = configureStore({});


describe('Component: FavoritesItem', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      DATA: {favoriteOffers: mockOffers},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      UI: {city: DEFAULT_CITY},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesItem favoriteOffersByCity={mockOffers} city={mockCity.name} />
        </Router>
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card')).toHaveLength(mockOffers.length);
  });

  it('should redirect to / upon link click', () => {
    history.push('/favorite');
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    store = mockStore({
      DATA: {favoriteOffers: mockOffers},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      UI: {city: DEFAULT_CITY},
    });
    const {getByTestId, queryByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <FavoritesItem favoriteOffersByCity={mockOffers} city={mockCity.name} />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    const linkElement = getByTestId('locations__item-link');
    expect(linkElement).toBeInTheDocument();
    userEvent.click(linkElement);

    expect(dispatch).nthCalledWith(1, {
      type: ActionType.SET_CITY,
      payload: mockCity.name,
    });

    expect(queryByText('This is main page')).toBeInTheDocument();
  });
});
