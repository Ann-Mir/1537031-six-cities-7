import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PropertyImage from '../property-image/property-image';
import {FIRST_ELEMENT_INDEX, MAX_IMAGES_COUNT} from '../../const';


function PropertyGallery({ images }) {
  return (
    <div className="property__gallery">
      {images
        .slice(FIRST_ELEMENT_INDEX, MAX_IMAGES_COUNT)
        .map((image) => <PropertyImage key={image} image={image}/>)}
    </div>
  );
}

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default memo(PropertyGallery);
