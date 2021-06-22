import React from 'react';
import {SortTypes} from '../../const';
import SortingOption from '../sorting-option/sorting-option';

function SortingOptionsList() {
  const sortingOptions = Object.values(SortTypes);
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortingOptions.map((option) => <SortingOption key={option} sortingType={option}/>)}
    </ul>
  );
}


export default SortingOptionsList;
