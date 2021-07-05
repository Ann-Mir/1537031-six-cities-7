import React from 'react';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from "../../const";
import {connect} from "react-redux";


function ReviewText({ onChange, value, hasPostedComment }) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onChange}
      minLength={MIN_REVIEW_LENGTH}
      maxLength={MAX_REVIEW_LENGTH}
      value={value}
      style={!hasPostedComment.hasPosted ? {borderColor: 'red'} : {}}
    />
  );
}


export default ReviewText;

