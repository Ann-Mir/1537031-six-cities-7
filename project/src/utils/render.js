import {RATING_STEP} from '../settings';

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const getRating = (userRating) => {
  return Math.round(userRating) * RATING_STEP;
}

export { capitalizeFirstLetter, getRating };
