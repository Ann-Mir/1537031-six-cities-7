import React, {Fragment} from 'react';
import {ratingStarsOptions} from "../../settings";

function RatingOptions({setRating}) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingStarsOptions.map(({value, title}) => {
        return (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={(evt) => setRating(evt.target.value)}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" style={{width: '37', height: '33'}}>
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
}

export default RatingOptions;
