import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import NotFoundPage from './not-found-page';
import {AuthorizationStatus} from '../../../const';

let history = null;
let store = null;

describe('Component: NotFoundPage', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
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
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>,
    );
    expect(getByText(/404. Page not found/i)).toBeInTheDocument();
  });
});
