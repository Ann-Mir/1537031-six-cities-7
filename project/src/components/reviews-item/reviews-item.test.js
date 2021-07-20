import React from 'react';
import {render} from '@testing-library/react';
import ReviewsItem from './reviews-item';


const testReview = {
  id: 1,
  comment: 'test comment',
  date: '2019-05-08T14:13:56.569Z',
  rating: 5,
  user: {
    id: 4,
    avatarUrl: 'test url',
    name: 'test name',
    isPro: false,
  },
};

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const {getByText, getByRole, getByTestId} = render(<ReviewsItem review={testReview} />);

    const commentElement = getByText('test comment');
    const nameElement = getByText('test name');
    const imageElement = getByRole('img', 'test url');
    const timeElement = getByTestId('reviews__time');

    expect(commentElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test url');
    expect(timeElement).toHaveAttribute('dateTime', '2019-05-08');
    expect(timeElement).toHaveTextContent('May 2019');
  });
});
