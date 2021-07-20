import React from 'react';
import {render} from '@testing-library/react';
import PropertyGallery from './property-gallery';
import {MAX_IMAGES_COUNT} from '../../const';


const mockImages = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth']

describe('Component: PropertyGallery', () => {
  it('should render correctly', () => {
    const {getAllByRole} = render(<PropertyGallery images={mockImages}/>);
    const imagesElements = getAllByRole('img');

    expect(imagesElements).toHaveLength(MAX_IMAGES_COUNT);
  });
});
