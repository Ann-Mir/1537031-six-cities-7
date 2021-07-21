import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReviewForm from './review-form';
import { AuthorizationStatus } from '../../const';

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {},
      },
    });
    const { getByRole, getByText, getByLabelText } = render(
      <Provider store={store}>
        <ReviewForm offerId={'1'} />
      </Provider>,
    );
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(getByText(/50 characters/i)).toBeInTheDocument();
  });
});
