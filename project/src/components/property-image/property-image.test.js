import React from 'react';
import {render} from '@testing-library/react';
import PropertyImage from './property-image';


describe('Component: PropertyImage', () => {
  it('should render correctly', () => {
    const {getByRole} = render(<PropertyImage image={'fakeImage'}/>);
    const imageElement = getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'fakeImage');
  });
});
