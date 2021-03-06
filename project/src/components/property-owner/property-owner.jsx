import React, {memo} from 'react';
import PropTypes from 'prop-types';


function PropertyOwner({ host }) {
  const { avatarUrl, isPro, name } = host;

  const AvatarSizes = {
    WIDTH: '54',
    HEIGHT: '74',
  };

  return (
    <div className="property__host-user user">
      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
        <img
          className="property__avatar user__avatar"
          src={avatarUrl}
          style={{width: AvatarSizes.WIDTH, height: AvatarSizes.HEIGHT}}
          alt="Host avatar"
        />
      </div>
      <span className="property__user-name">
        {name}
      </span>
      {isPro && (
        <span className="property__user-status">
          Pro
        </span>
      )}
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
