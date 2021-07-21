import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';


let store = null;

describe('Component: LoginPage', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({ USER: {
      authorizationStatus: 'NO_AUTH',
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    }});
  });

  it('should render "LoginPage" when user navigates to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'keks');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
