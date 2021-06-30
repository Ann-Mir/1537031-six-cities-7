import React from 'react';
import PropTypes from 'prop-types';
import RatingOptions from '../rating-options/rating-options';
import offerPropTypes from '../offer.prop';

function ReviewForm(props) {
  const { offerId, onReviewSubmit } = props;
  const [rating, setRating] = React.useState(0);
  const [reviewText, setReviewText] = React.useState('');
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onReviewSubmit(offerId, rating, reviewText)
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingOptions setRating={setRating}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => setReviewText(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offer: offerPropTypes,
  onReviewSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
