import React from 'react';
import PropTypes from 'prop-types';

function SortingOption({ sortingType }) {
  return (
    <li className="places__option" tabIndex="0">{sortingType}</li>
  );
}

SortingOption.propTypes = {
  sortingType: PropTypes.string.isRequired,
};

export default SortingOption;
