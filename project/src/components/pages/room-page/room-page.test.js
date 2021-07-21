import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import RoomPage from './room-page';
import {AuthorizationStatus, DEFAULT_CITY} from '../../../const';
import {createAPI} from '../../../services/api';
import thunk from 'redux-thunk';
import {Route} from 'react-router';


let history;
let store;
let api = null;


describe('Component: RoomPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});
  });

  it('should render correctly if data is not loaded', () => {
    history.push('/offers/2');
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
          <Route to='/offers/2'>
            <RoomPage />
          </Route>
        </Router>
      </Provider>);

    expect(screen.queryByText('Loading...')).toBeInTheDocument();
  });
});
