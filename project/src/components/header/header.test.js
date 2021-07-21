import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import Header from './header';


let history;
let store;
const mockStore = configureStore({});


describe('Component: Header', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly for Authorized user', () => {
    store = mockStore({
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
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByTestId(/user-email/i)).toBeInTheDocument();
    expect(screen.getByTestId(/user-email/i)).toHaveTextContent('test@mail.com');
    expect(screen.getByTestId(/signout/i)).toBeInTheDocument();
  });

  it('should render correctly for not Authorized user', () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: false,
          name: '',
        },
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
