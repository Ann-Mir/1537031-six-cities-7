import React from 'react';
import {render} from '@testing-library/react';
import FeaturesList from './features-list';


const mockFeatures = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];

describe('Component: FeaturesList', () => {
  it('should render correctly', () => {
    const {getByText} = render(<FeaturesList goods={mockFeatures} />);
    mockFeatures.forEach((item) => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
