import {RATING_STEP} from '../settings';

const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

const getRating = (userRating) => Math.round(userRating) * RATING_STEP;


export { capitalizeFirstLetter, getRating };
