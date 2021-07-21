import {RATING_STEP} from '../settings';

const FIRST_LETTER_INDEX = 0;
const SECOND_LETTER_INDEX = 1;

const capitalizeFirstLetter = (string) => string[FIRST_LETTER_INDEX].toUpperCase() + string.slice(SECOND_LETTER_INDEX);

const getRating = (userRating) => Math.round(userRating) * RATING_STEP;


export { capitalizeFirstLetter, getRating };
