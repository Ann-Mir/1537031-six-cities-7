import {getRandomInteger} from './utils';

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [`http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`, `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
    price: 120,
    rating: 2.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
      id: 2,
      isPro: false,
      name: 'Elizabeth'
    },
    id: 2,
    images: [`http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`, `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.36632405116683,
      longitude: 4.835288109409351,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
    price: 220,
    rating: 4.4,
    title: 'Beautiful & luxurious house at great location',
    type: 'house'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Cable TV', 'Coffee machine'],
    host: {
      avatarUrl: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
      id: 1,
      isPro: true,
      name: 'Oliver'
    },
    id: 3,
    images: [`http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`, `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
    price: 320,
    rating: 3.4,
    title: 'Beautiful & luxurious hotel at great location',
    type: 'hotel'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Coffee machine'],
    host: {
      avatarUrl: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
      id: 4,
      isPro: false,
      name: 'John'
    },
    id: 4,
    images: [`http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`, `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.38225355642883,
      longitude: 4.85520082827032,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
    price: 70,
    rating: 4.7,
    title: 'Beautiful & luxurious room at great location',
    type: 'room'
  },
];

export default offers;
