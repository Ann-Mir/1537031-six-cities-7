import React from 'react';
import PropTypes from 'prop-types';
import RatingOptions from '../rating-options/rating-options';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, ToastMessages} from '../../const';
import {useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import ReviewText from '../review-text/review-text';
import Toast from '../toast/toast';
import {setAreReviewsLoaded} from '../../store/action';

function ReviewForm({ offerId }) {

  const [rating, setRating] = React.useState(0);
  const [review, setReviewText] = React.useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [isSendingComment, setIsSendingComment] = React.useState(false);
  const [isReviewInError, setIsReviewInError] = React.useState(false);

  const dispatch = useDispatch();

  const handleFormChange = () => {
    setIsSubmitDisabled(!(review.length >= MIN_REVIEW_LENGTH
      && review.length <= MAX_REVIEW_LENGTH
      && rating > 0
      && !isSendingComment));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (isSubmitDisabled || isSendingComment) {
      return;
    }

    setIsSendingComment(true);
    setIsSubmitDisabled(true);
    setIsReviewInError(false);
    dispatch(setAreReviewsLoaded(false));

    dispatch(sendComment({id: offerId, comment: review, rating: rating}))
      .then(() => {
        setReviewText('');
        setRating(0);
        setIsSubmitDisabled(true);
      })
      .catch(() => {
        setIsReviewInError(true);
        setIsSendingComment(false);
        setIsSubmitDisabled(false);
      })
      .finally(() => {
        dispatch(setAreReviewsLoaded(true));
        setIsSendingComment(false);
      });
  };

  const handleTextChange = React.useCallback((evt) => {
    if (!isSendingComment) {
      setReviewText(evt.target.value);
    }
  },[isSendingComment]);

  const handleRatingChange = React.useCallback((evt) => {
    if (!isSendingComment) {
      setRating(Number(evt.target.value));
    }
  }, [isSendingComment]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      onFocus={handleFormChange}
      data-testid="review-form"
    >
      {isReviewInError && <Toast message={ToastMessages.REVIEW_ERROR} />}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingOptions rating={rating} onChange={handleRatingChange} onInput={handleFormChange}/>
      <ReviewText value={review} onChange={handleTextChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>
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
