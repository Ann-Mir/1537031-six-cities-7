import React from 'react';
import PropTypes from 'prop-types';
import PropertyImage from '../property-image/property-image';

function PropertyGallery({ images }) {
  return (
    <div className="property__gallery">
      {images.map((image, i) => <PropertyImage key={i + image} image={image}/>)}
    </div>
  );
}

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PropertyGallery;
