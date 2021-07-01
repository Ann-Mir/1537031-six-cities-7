import React from 'react';
import PropTypes from 'prop-types';
import RatingOptions from '../rating-options/rating-options';
import offerPropTypes from '../offer.prop';
import {AuthorizationStatus, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';
import {connect, useDispatch} from "react-redux";
import {sendComment} from "../../store/api-actions";

function ReviewForm({ offerId, authorizationStatus, hasPostedComment }) {
  //const { offerId, onReviewSubmit } = props;
  const [rating, setRating] = React.useState(0);
  const [review, setReviewText] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);


  const dispatch = useDispatch();

  const handleFormChange = (evt) => {
    setIsDisabled(!(review.length >= MIN_REVIEW_LENGTH
      && review.length <= MAX_REVIEW_LENGTH
      && rating > 0));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (isDisabled || authorizationStatus !== AuthorizationStatus.AUTH) {
      return;
    }
    setIsDisabled(true);
    dispatch(sendComment({id: offerId, comment: review, rating: rating}));
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingOptions setRating={setRating}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => setReviewText(evt.target.value)}
        minLength={MIN_REVIEW_LENGTH}
        maxLength={MAX_REVIEW_LENGTH}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offer: offerPropTypes,
  onReviewSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  hasPostedComment: state.hasPostedComment,
});

export {ReviewForm};
export default connect(mapStateToProps)(ReviewForm);
