import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function LocationsOption({ name , isActive, onClick }) {

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        onClick={onClick}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}


LocationsOption.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default React.memo(LocationsOption);
