import React from 'react';

function PropertyImage({ image }) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio"/>
    </div>
  );
}

export default PropertyImage;
