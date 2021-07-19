import React from 'react';
import { Provider } from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import BookmarkButton from './bookmark-button';
import {BookmarkButtonTypes} from '../../settings';
import {createMemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Router} from 'react-router-dom';


const fakeFavoriteOffer =   {
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
  images: ['http://picsum.photos/248/152?r=$2'],
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
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment'
};


const fakeUnfavoriteOffer =   {
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
  images: ['http://picsum.photos/248/152?r=$2'],
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
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment'
};

let store = null;
let history = null;


describe('BookmarkButton should render correctly', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
    const createFakeStore = configureStore({});
    store = createFakeStore({ USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    });
  });

  it('BookmarkButton should render correctly if offer is favorite', () => {

    const {getByText, getByRole} = render(
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton buttonType={BookmarkButtonTypes.CARD} offerId={fakeFavoriteOffer.id} isFavorite={fakeFavoriteOffer.isFavorite}/>
        </Router>
      </Provider>
    );

    const bookmarkButtonText = getByText('In bookmarks');
    const bookmarkButton = getByRole('button');

    expect(bookmarkButtonText).toBeInTheDocument();
    expect(bookmarkButton).toHaveClass('place-card__bookmark-button--active');
  });

  it('BookmarkButton should render correctly if offer is not favorite', () => {

    const {getByText, getByRole} = render(
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton buttonType={BookmarkButtonTypes.CARD} offerId={fakeUnfavoriteOffer.id} isFavorite={fakeUnfavoriteOffer.isFavorite} />
        </Router>
      </Provider>
    );

    const bookmarkButtonText = getByText('To bookmarks');
    const bookmarkButton = getByRole('button');

    expect(bookmarkButtonText).toBeInTheDocument();
    expect(bookmarkButton).not.toHaveClass('place-card__bookmark-button--active');
  });
});
