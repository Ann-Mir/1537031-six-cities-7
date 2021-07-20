import React from 'react';
import { render } from '@testing-library/react';
import SortingOptionsList from './sorting-options-list';
import configureStore from 'redux-mock-store';
import {DEFAULT_SORT_TYPE, SortTypes} from '../../const';
import {Provider} from 'react-redux';


describe('Component: SortingOptionsList', () => {
  it('should render correctly', () => {

    const mockFunction = jest.fn();
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      UI: {
        activeSortType: DEFAULT_SORT_TYPE,
      },
    });
    const { getAllByTestId } = render(
      <Provider store={store}>
        <SortingOptionsList onSortTypeClick={mockFunction} onSetIsSortOpen={mockFunction}/>
      </Provider>,
    );

    const optionsElements = getAllByTestId('sort-option');

    expect(optionsElements).toHaveLength(Object.keys(SortTypes).length);
  });
});
