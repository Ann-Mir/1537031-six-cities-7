import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {SortTypes} from '../../const';
import SortingOption from '../sorting-option/sorting-option';
import useOutsideClick from '../../hooks/useOutsideclick';

function SortingOptionsList({ onSortTypeClick, onSetIsSortOpen }) {
  const sortingOptions = Object.keys(SortTypes);
  const sortingRef = useRef(null);

  useOutsideClick(sortingRef, onSetIsSortOpen);

  return (
    <ul className="places__options places__options--custom places__options--opened" ref={sortingRef}>
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
  onSetIsSortOpen: PropTypes.func.isRequired,
};

export default SortingOptionsList;
