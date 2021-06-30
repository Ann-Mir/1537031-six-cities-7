import React, {useEffect} from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewForm from '../review-form/review-form';
import {fetchComments} from '../../store/api-actions';
import {connect, useDispatch} from 'react-redux';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {AuthorizationStatus, MAX_REVIEWS_COUNT} from '../../const';


function Reviews({ offerId, currentOffer, comments, areReviewsLoaded, onReviewSubmit, authorizationStatus }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(offerId));
  }, [offerId]);

  return (
    <LoadWrapper isDataLoaded={areReviewsLoaded}>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {comments.map((comment) => <ReviewsItem key={comment.id} review={comment}/>)}
        </ul>
        {
          authorizationStatus === AuthorizationStatus.AUTH
          && <ReviewForm offer={currentOffer} onReviewSubmit={onReviewSubmit}/>
        }
      </section>
    </LoadWrapper>
  );
}


const mapStateToProps = (state) => ({
  comments: state.comments.slice().splice(0, MAX_REVIEWS_COUNT),
  areReviewsLoaded: state.areReviewsLoaded,
  authorizationStatus: state.authorizationStatus,
});

export {Reviews};

export default connect(mapStateToProps)(Reviews);
