import React from 'react';
import PropTypes from 'prop-types';
import PropertyImage from '../property-image/property-image';
import {MAX_IMAGES_COUNT} from '../../const';

function PropertyGallery({ images }) {
  return (
    <div className="property__gallery">
      {images
        .slice()
        .splice(0, MAX_IMAGES_COUNT)
        .map((image, i) => <PropertyImage key={i + image} image={image}/>)}
    </div>
  );
}

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PropertyGallery;
