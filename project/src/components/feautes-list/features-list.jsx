import React from 'react';
import FeatureItem from '../feature-item/feature-item';

function FeaturesList({goods}) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((feature) => <FeatureItem key={feature} feature={feature}/>)}
      </ul>
    </div>
  );
}

export default FeaturesList;
