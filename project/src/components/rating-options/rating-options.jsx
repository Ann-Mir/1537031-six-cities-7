import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ratingStarsOptions} from '../../settings';

function RatingOptions({ rating, onChange }) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        ratingStarsOptions.map(({value, title}) => {
          return (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={onChange}
                checked={rating === value}
                data-testid={`rating-option-${value}`}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" style={{width: '37', height: '33'}}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
          }
        )
      }
    </div>
  );
}

RatingOptions.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default React.memo(RatingOptions);
