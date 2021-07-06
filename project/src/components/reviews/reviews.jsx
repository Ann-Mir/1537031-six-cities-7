import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import reviewPropTypes from '../review.prop';
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


Reviews.propTypes = {
  offerId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(reviewPropTypes).isRequired,
  areReviewsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  comments: DATA.comments.slice().splice(0, MAX_REVIEWS_COUNT),
  areReviewsLoaded: DATA.areReviewsLoaded,
});


export {Reviews};
export default connect(mapStateToProps)(Reviews);
