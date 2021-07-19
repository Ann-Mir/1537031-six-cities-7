import { render, screen } from '@testing-library/react';
import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';
import userEvent from '@testing-library/user-event';
import {LogoTypes} from '../../settings';

let history;

describe('Component: Logo', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const {getByRole} = render(
      <Router history={history}>
        <Logo logoType={LogoTypes.HEADER} />
      </Router>
    );

    const imageElement = getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', "../img/logo.svg");
  });

  it('should redirect to root url when user clicks the link', () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo logoType={LogoTypes.HEADER} />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('logo-link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
