import React from 'react';
import {render} from '@testing-library/react';
import FeatureItem from './feature-item';


describe('Component: FeatureItem', () => {
  it('should render correctly', () => {
    const {getByText} = render(<FeatureItem feature={'wi-fi'} />);
    const itemElement = getByText('wi-fi');

    expect(itemElement).toBeInTheDocument();
  });
});
