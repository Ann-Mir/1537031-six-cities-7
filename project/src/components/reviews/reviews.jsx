import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewForm from '../review-form/review-form';


function Reviews({ currentOffer, reviews, onReviewSubmit }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
      </ul>
      <ReviewForm offer={currentOffer} onReviewSubmit={onReviewSubmit}/>
    </section>
  );
}

export default Reviews;
