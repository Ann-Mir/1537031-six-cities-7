import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import LocationsOption from './locations-option';
import userEvent from '@testing-library/user-event';


let history;
let store;
const mockStore = configureStore({});


describe('Component: LocationsOption', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {

    store = mockStore({
      UI: {city: 'Amsterdam'},
    });
    const onClick = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <LocationsOption name={'Amsterdam'} onClick={onClick} isActive={false}/>
        </Router>
      </Provider>);

    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    userEvent.click(screen.getByText('Amsterdam'));
    expect(onClick).toBeCalled();
  });
});
