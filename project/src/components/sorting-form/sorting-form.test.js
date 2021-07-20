import React from 'react';
import { render } from '@testing-library/react';
import SortingForm from './sorting-form';
import configureStore from 'redux-mock-store';
import {DEFAULT_SORT_TYPE} from '../../const';
import {Provider} from 'react-redux';


describe('Component: SortingForm', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      UI: {
        activeSortType: DEFAULT_SORT_TYPE,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <SortingForm />
      </Provider>,
    );
    expect(getByText(/Sort by/i)).toBeInTheDocument();
    expect(getByText('Popular')).toBeInTheDocument();
  });
});
