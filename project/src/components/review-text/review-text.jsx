import React from 'react';
import PropTypes from 'prop-types';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';


function ReviewText({ onChange, value }) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      data-testid="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onChange}
      minLength={MIN_REVIEW_LENGTH}
      maxLength={MAX_REVIEW_LENGTH}
      value={value}
    />
  );
}


ReviewText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default React.memo(ReviewText);
