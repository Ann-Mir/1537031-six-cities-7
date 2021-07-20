import React from 'react';
import {render} from '@testing-library/react';
import PropertyDescription from './property-description';
import {createAPI} from '../../services/api';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';


const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: 'Amsterdam'
  },
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: true,
    name: 'Angelina'
  },
  id: 1,
  images: ['http://picsum.photos/248/152?r=1'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'http://picsum.photos/248/152?r=1',
  price: 120,
  rating: 2.3,
  title: 'Beautiful & luxurious apartment',
  type: 'apartment'
};

let store;
let api;

describe('Component: PropertyDescription', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });
  it('should render correctly', () => {
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        currentOffer: mockOffer,
        isOfferLoaded: true,
      },
    });
    const {getByText} = render(
      <Provider store={store}>
        <PropertyDescription offer={mockOffer}/>
      </Provider>
    );

    expect(getByText('Beautiful & luxurious apartment')).toBeInTheDocument();
    expect(getByText('A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.')).toBeInTheDocument();
    expect(getByText('Angelina')).toBeInTheDocument();
    expect(getByText('3 Bedrooms')).toBeInTheDocument();
    expect(getByText('Max 4 adults')).toBeInTheDocument();
    expect(getByText('Heating')).toBeInTheDocument();
    expect(getByText('Kitchen')).toBeInTheDocument();
    expect(getByText('Cable TV')).toBeInTheDocument();
  });
});
