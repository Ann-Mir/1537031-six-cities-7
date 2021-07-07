import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item';
import {fetchComments} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {getAreReviewsLoadedStatus, getComments, getCommentsToRender} from '../../store/data/selectors';


function Reviews({ offerId }) {

  const areReviewsLoaded = useSelector(getAreReviewsLoadedStatus);
  const commentsCount = useSelector(getComments).length;
  const comments = useSelector(getCommentsToRender).slice().sort((firstComment, secondComment) => {
    return new Date(secondComment.date) - new Date(firstComment.date);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(offerId));
  }, [offerId]);

  return (
    <LoadWrapper isDataLoaded={areReviewsLoaded}>
        <h2 className="reviews__title">
          Reviews &middot; <span className="reviews__amount">{commentsCount}</span>
        </h2>
        <ul className="reviews__list">
          {comments.map((comment) => <ReviewsItem key={comment.id} review={comment}/>)}
        </ul>
    </LoadWrapper>
  );
}


Reviews.propTypes = {
  offerId: PropTypes.string.isRequired,
};


export default Reviews;
