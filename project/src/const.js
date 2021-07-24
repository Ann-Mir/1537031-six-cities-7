export const AppRoute = {
  NOT_FOUND: '/not-found',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offers/:id',
  ROOT: '/',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels/',
  REVIEWS: '/comments/',
  NEARBY: '/nearby',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite/',
};

export const MARKER_DEFAULT = 'img/pin.svg';

export const MARKER_CURRENT = 'img/pin-active.svg';

export const LOCATIONS = [
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

export const DEFAULT_CITY = 'Paris';

export const LOGIN_PAGE_CITY = 'Amsterdam';

export const SortTypes = {
  POPULAR: 'Popular',
  LOW: 'Price: low to high',
  HIGH: 'Price: high to low',
  TOP: 'Top rated first',
};

export const MAX_REVIEWS_COUNT = 10;

export const DEFAULT_SORT_TYPE = SortTypes.POPULAR;

export const MAX_IMAGES_COUNT = 6;

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 300;

export const RESPONSE_SUCCESS = 200;

export const ToastMessages = {
  DEFAULT: 'Something went wrong',
  OFFLINE: 'Connection is lost',
  REVIEW_ERROR: 'The review is not sent. Please try again',
  LOGIN_ERROR: 'Something went wrong. Please try again',
};

export const DEFAULT_TIMEOUT = 10000;

export const DEFAULT_RATING = 0;

export const EMPTY_OFFERS_LENGTH = 0;

export const DEFAULT_CUSTOM_ICON = {
  iconUrl: MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
};

export const CURRENT_CUSTOM_ICON = {
  iconUrl: MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
};

export const FIRST_ELEMENT_INDEX = 0;

export const LAST_DATE_INDEX = 10;

export const FIRST_MONTH_INDEX = 5;

export const LAST_MONTH_INDEX = 7;

export const LAST_YEAR_INDEX = 4;
