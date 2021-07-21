import React, {memo} from 'react';
import PropTypes from 'prop-types';
import FeatureItem from '../feature-item/feature-item';

function FeaturesList({ goods }) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((feature) => <FeatureItem key={feature} feature={feature}/>)}
      </ul>
    </div>
  );
}

FeaturesList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default memo(FeaturesList);
