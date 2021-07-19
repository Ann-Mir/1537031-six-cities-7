import { render } from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';

let history;

describe('Component: Footer', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const {getByTestId} = render(
      <Router history={history}>
        <Footer />
      </Router>
    );

    const footerElement = getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
  });
});
