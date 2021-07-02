import React, {useEffect} from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {fetchComments} from '../../store/api-actions';
import {connect, useDispatch} from 'react-redux';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {MAX_REVIEWS_COUNT} from '../../const';


function Reviews({ offerId, comments, areReviewsLoaded }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(offerId));
  }, [offerId]);

  return (
    <LoadWrapper isDataLoaded={areReviewsLoaded}>
        <h2 className="reviews__title">
          Reviews &middot; <span className="reviews__amount">{comments.length}</span>
        </h2>
        <ul className="reviews__list">
          {comments.map((comment) => <ReviewsItem key={comment.id} review={comment}/>)}
        </ul>
    </LoadWrapper>
  );
}


const mapStateToProps = (state) => ({
  comments: state.comments.slice().splice(0, MAX_REVIEWS_COUNT),
  areReviewsLoaded: state.areReviewsLoaded,
});


export {Reviews};
export default connect(mapStateToProps)(Reviews);
