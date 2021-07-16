import React from 'react';
import {render} from '@testing-library/react';
import ReviewText from './review-text';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';


const testValue = 'erguhuhrhvruiuvh';
const hasPostedComment = {
  status: true,
  comment: '',
  rating: 1
};

describe('Component: ReviewText', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<ReviewText value={testValue} onChange={() => {}} hasPostedComment={hasPostedComment}/>);

    const textElement = getByTestId('review');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveAttribute('minLength', MIN_REVIEW_LENGTH.toString());
    expect(textElement).toHaveAttribute('maxLength', MAX_REVIEW_LENGTH.toString());
    expect(textElement).toHaveValue(testValue);
  });
})
