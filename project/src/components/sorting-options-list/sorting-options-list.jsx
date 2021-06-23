import React from 'react';
import {SortTypes} from '../../const';
import SortingOption from '../sorting-option/sorting-option';

function SortingOptionsList({ handleSortTypeClick }) {
  const sortingOptions = Object.keys(SortTypes);

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortingOptions.map((option) => <SortingOption
        key={option}
        sortingType={option}
        handleSortTypeClick={handleSortTypeClick}
      />)}
    </ul>
  );
}


export default SortingOptionsList;
