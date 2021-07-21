import React, {memo} from 'react';
import PropTypes from 'prop-types';


function LocationsOption({ name , isActive, onClick }) {

  return (
    <li className="locations__item" data-testid="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        onClick={onClick}
        data-testid={`locations__item-link-${name}`}
        href="/#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
}


LocationsOption.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default memo(LocationsOption);
