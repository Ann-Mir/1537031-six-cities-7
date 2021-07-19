import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import LocationsList from './locations-list';


let history;
let store;
const mockStore = configureStore({});

const mockLocations = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    },
  },
];


describe('Component: LocationsList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      UI: {city: 'Amsterdam'},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <LocationsList locations={mockLocations} />
        </Router>
      </Provider>);

    expect(screen.getAllByTestId('locations__item')).toHaveLength(mockLocations.length);
    mockLocations.forEach((item) => expect(screen.getByText(item.name)).toBeInTheDocument());
  });
});
