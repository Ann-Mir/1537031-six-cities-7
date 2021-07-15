import React from 'react';
import PropTypes from 'prop-types';
import {SortTypes} from '../../const';
import SortingOption from '../sorting-option/sorting-option';

function SortingOptionsList({ onSortTypeClick }) {
  const sortingOptions = Object.keys(SortTypes);

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        sortingOptions.map((option) =>
          <SortingOption
            key={option}
            sortingType={option}
            handleSortTypeClick={onSortTypeClick}
          />)
      }
    </ul>
  );
}


SortingOptionsList.propTypes = {
  onSortTypeClick: PropTypes.func.isRequired,
};

export default SortingOptionsList;
