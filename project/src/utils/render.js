import {RATING_STEP} from '../settings';

const FIRST_LETTER_INDEX = 0;
const SECOND_LETTER_INDEX = 1;
const SINGULAR_NOUN_COUNT = 1;


const capitalizeFirstLetter = (string) => string[FIRST_LETTER_INDEX].toUpperCase() + string.slice(SECOND_LETTER_INDEX);

const getRating = (userRating) => Math.round(userRating) * RATING_STEP;

const pluralize = (word, count) => {
  if (count === SINGULAR_NOUN_COUNT) {
    return word;
  }
  return `${word}s`;
};

export { capitalizeFirstLetter, getRating, pluralize };
