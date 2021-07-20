import React from 'react';
import { render } from '@testing-library/react';
import Reviews from './reviews';
import {createAPI} from '../../services/api';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux/lib/alternate-renderers';

const mockReviews = [
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'test comment',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'test img',
      id: 5,
      isPro: false,
      name: 'Angelina',
    },
  },
];

let history = null;
let store = null;
let api = null;

describe('Component: ReviewList', () => {
  beforeEach(() => {
    api = createAPI(() => {});
    history = createMemoryHistory();
  });

  it('should render correctly if data is loaded', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        comments: mockReviews,
        areReviewsLoaded: true,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <Reviews offerId={'1'}/>
      </Provider>
    );

    const countElement = getByTestId('reviews__amount');
    expect(countElement).toHaveTextContent(mockReviews.length.toString());
  });

  it('should render correctly if data is not loaded', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        comments: [],
        areReviewsLoaded: false,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Reviews offerId={'1'}/>
      </Provider>
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
