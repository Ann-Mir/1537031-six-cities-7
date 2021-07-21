import React from 'react';
import {render} from '@testing-library/react';
import RatingOptions from './rating-options';


const ratingStarsOptions = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

const testRating = 5;

describe('Component: RatingOptions', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<RatingOptions rating={testRating} onChange={jest.fn()} onInput={jest.fn()}/>);
    ratingStarsOptions.forEach((item) => {
      const option = getByTestId(`rating-option-${item.value}`);
      expect(option).toBeInTheDocument();
      expect(option).toHaveAttribute('value', (item.value).toString());
      expect(option).toHaveAttribute('id', `${item.value}-stars`);
    });
  });
});
