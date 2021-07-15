import React from 'react';
import {render} from '@testing-library/react';
import HeaderNavGuest from './header-nav-guest';
import {Router} from "react-router";
import {createMemoryHistory} from "history";


describe('Component: HeaderNavGuest', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory()
    const {getByText} = render(
      <Router history={history}>
        <HeaderNavGuest />
      </Router>
    );
    const linkElement = getByText('Sign in');

    expect(linkElement).toBeInTheDocument();
  });
});
