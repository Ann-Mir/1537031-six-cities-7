import React from 'react';
import PropertyImage from '../property-image/property-image';

function PropertyGallery({ images }) {
  return (
    <div className="property__gallery">
      {images.map((image, i) => <PropertyImage key={i + image} image={image}/>)}
    </div>
  );
}

export default PropertyGallery;
