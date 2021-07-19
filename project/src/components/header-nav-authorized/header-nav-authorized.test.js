import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import HeaderNavAuthorized from './header-nav-authorized';


let history;
let store;
const mockStore = configureStore({});


describe('Component: HeaderNavAuthorized', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly for Authorized user', () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <HeaderNavAuthorized email={'test@mail.com'} avatarUrl={'test avatar'}/>
        </Router>
      </Provider>);

    expect(screen.getByTestId(/user-email/i)).toBeInTheDocument();
    expect(screen.getByTestId(/user-email/i)).toHaveTextContent('test@mail.com');
    expect(screen.getByTestId(/signout/i)).toBeInTheDocument();
  });
});
