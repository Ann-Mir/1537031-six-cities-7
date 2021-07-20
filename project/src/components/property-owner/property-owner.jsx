import React, {memo} from 'react';
import PropTypes from 'prop-types';


function PropertyOwner({ host }) {
  const { avatarUrl, isPro, name } = host;
  return (
    <div className="property__host-user user">
      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
        <img
          className="property__avatar user__avatar"
          src={avatarUrl}
          style={{width: '74', height: '74'}}
          alt="Host avatar"
        />
      </div>
      <span className="property__user-name">
        {name}
      </span>
      <span className={`property__user-status ${isPro ? '' : 'visually-hidden'}`}>
        Pro
      </span>
    </div>
  );
}


PropertyOwner.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default memo(PropertyOwner);
