export const LogoTypes = {
  HEADER: 'HEADER',
  FOOTER: 'FOOTER',
};

export const LOGO_SETTINGS = {
  'HEADER': {
    CLASS_MIX: 'header',
    ACTIVE_CLASS: 'header__logo-link--active',
    WIDTH: 81,
    HEIGHT: 41,
  },
  'FOOTER': {
    CLASS_MIX: 'footer',
    WIDTH: 64,
    HEIGHT: 33,
  }
};

export const BookmarkButtonTypes = {
  CARD: 'CARD',
  ROOM: 'ROOM',
};

export const BOOKMARK_BUTTON_SETTING = {
  'CARD': {
    CLASS_MIX: 'place-card',
    WIDTH: 18,
    HEIGHT: 19,
  },
  'ROOM': {
    CLASS_MIX: 'property',
    WIDTH: 31,
    HEIGHT: 33,
  }
};

export const ratingStarsOptions = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
]

export const RATING_STEP = 20;

export const monthsByNumber = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

export const CardTypes = {
  MAIN: 'MAIN',
  FAVORITES: 'FAVORITES',
  NEAR: 'NEAR',
};

export const CARD_SETTINGS = {
  'MAIN': {
    CLASS_MIX: 'cities__place-card',
    IMAGE_WRAPPER_CLASS: 'cities__image-wrapper',
    CARD_INFO_CLASS: '',
    CARD_WIDTH: 260,
    CARD_HEIGHT: 200,
  },
  'FAVORITES': {
    CLASS_MIX: 'favorites__card',
    IMAGE_WRAPPER_CLASS: 'favorites__image-wrapper',
    CARD_INFO_CLASS: 'favorites__card-info',
    CARD_WIDTH: 150,
    CARD_HEIGHT: 110,
  },
  'NEAR': {
    CLASS_MIX: 'near-places__card',
    IMAGE_WRAPPER_CLASS: 'near-places__image-wrapper',
    CARD_INFO_CLASS: '',
    CARD_WIDTH: 260,
    CARD_HEIGHT: 200,
  }
};
