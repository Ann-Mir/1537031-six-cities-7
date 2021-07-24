import React from 'react';
import {getRating} from '../../utils/render';
import {monthsByNumber} from '../../settings';
import reviewPropTypes from '../review.prop';
import {
  FIRST_ELEMENT_INDEX,
  FIRST_MONTH_INDEX,
  LAST_DATE_INDEX,
  LAST_MONTH_INDEX,
  LAST_YEAR_INDEX
} from '../../const';


function ReviewsItem({ review }) {

  const {comment, date, rating, user} = review;
  const { avatarUrl, name} = user;

  const AvatarSizes = {
    WIDTH: '54',
    HEIGHT: '54',
  };

  const ratingWidth = getRating(rating);

  const dateTime = date.slice(FIRST_ELEMENT_INDEX, LAST_DATE_INDEX);
  const monthNumber = date.slice(FIRST_MONTH_INDEX, LAST_MONTH_INDEX);
  const month = monthsByNumber[monthNumber];
  const year = date.slice(FIRST_ELEMENT_INDEX, LAST_YEAR_INDEX);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            style={{width: AvatarSizes.WIDTH, height: AvatarSizes.HEIGHT}}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" data-testid="reviews__time" dateTime={dateTime}>{month} {year}</time>
      </div>
    </li>
  );
}


ReviewsItem.propTypes = {
  review: reviewPropTypes,
};

export default ReviewsItem;
