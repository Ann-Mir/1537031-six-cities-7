import React from 'react';
import {getRating} from '../../utils/render';
import {monthsByNumber} from '../../settings';
import reviewPropTypes from '../review.prop';

function ReviewsItem(props) {
  const {comment, date, rating, user} = props.review;
  const { avatarUrl, name} = user;
  const ratingWidth = getRating(rating);
  const dateTime = date.slice(0, 10);
  const monthNumber = date.slice(5, 7);
  const month = monthsByNumber[monthNumber];
  const year = date.slice(0, 4);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            style={{width: '54', height: '54'}}
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
        <time className="reviews__time" dateTime={dateTime}>{month} {year}</time>
      </div>
    </li>
  );
}


ReviewsItem.propTypes = {
  review: reviewPropTypes,
};

export default ReviewsItem;
