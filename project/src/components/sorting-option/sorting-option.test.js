import React from 'react';
import { render } from '@testing-library/react';
import SortingOption from './sorting-option';
import configureStore from 'redux-mock-store';
import {DEFAULT_SORT_TYPE} from '../../const';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {ActionType} from '../../store/action';


describe('Component: SortingOption', () => {
  it('should render correctly', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const mockFunction = jest.fn();
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      UI: {
        activeSortType: DEFAULT_SORT_TYPE,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <SortingOption sortingType={DEFAULT_SORT_TYPE} onSortTypeClick={mockFunction}/>
      </Provider>
    );

    const optionElement = getByTestId('sort-option');

    expect(optionElement).toBeInTheDocument();
    userEvent.click(optionElement);
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: ActionType.SET_SORT_TYPE,
    });
  });
});
