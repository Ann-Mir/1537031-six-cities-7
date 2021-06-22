import React from 'react';
import SortingOptionsList from '../sorting-options-list/sorting-options-list';

function SortingForm({ activeSortType }) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" style={{width: '7', height: '4'}}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingOptionsList />
    </form>
  );
}


export default SortingForm;
