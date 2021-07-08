import React from 'react';
import PropTypes from 'prop-types';

function FeatureItem({ feature }) {
  return (
    <li className="property__inside-item">
      {feature}
    </li>
  );
}

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default FeatureItem;
