import React from 'react';
import PropTypes from 'prop-types';
import RatingOptions from '../rating-options/rating-options';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import ReviewText from '../review-text/review-text';
import {getHasPostedComment} from '../../store/ui/selectors';

function ReviewForm({ offerId }) {

  const hasPostedComment = useSelector(getHasPostedComment);

  const [rating, setRating] = React.useState(0);
  const [review, setReviewText] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);


  const dispatch = useDispatch();

  const handleFormChange = () => {
    setIsDisabled(!(review.length >= MIN_REVIEW_LENGTH
      && review.length <= MAX_REVIEW_LENGTH
      && rating > 0));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    dispatch(sendComment({id: offerId, comment: review, rating: rating}))
      .then(() => {
        if (hasPostedComment.hasPosted) {
          setReviewText('');
          setRating(0);
        } else {
          setReviewText(hasPostedComment.comment);
          setRating(hasPostedComment.rating);
        }
      })
      .catch(() => {
        setReviewText(review);
        setRating(rating);
      })
      .finally(() => {
        setIsDisabled(true);
      });
  };

  const handleTextChange = React.useCallback((evt) => {
    setReviewText(evt.target.value);
  },[]);

  const handleRatingChange = React.useCallback((evt) => {
    setRating(Number(evt.target.value));
  }, []);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingOptions rating={rating} onChange={handleRatingChange}/>
      <ReviewText value={review} onChange={handleTextChange} hasPostedComment={hasPostedComment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offerId: PropTypes.string.isRequired,
};


export default ReviewForm;
