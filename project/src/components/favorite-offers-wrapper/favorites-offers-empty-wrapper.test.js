import React from 'react';
import {render} from '@testing-library/react';
import FavoriteOffersEmptyWrapper from '../favorite-offers-empty-wrapper/favorite-offers-empty-wrapper';


describe('Component: FavoriteOffersEmptyWrapper', () => {
  it('should render correctly', () => {
    const {getByText} = render(<FavoriteOffersEmptyWrapper />);

    const titleElement = getByText('Favorites (empty)');
    const statusElement = getByText('Nothing yet saved.');
    const statusDescription = getByText('Save properties to narrow down search or plan your future trips.')

    expect(titleElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(statusDescription).toBeInTheDocument();
  });
})
