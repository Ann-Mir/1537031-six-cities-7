import React, {useState} from 'react';
import SortingOptionsList from '../sorting-options-list/sorting-options-list';
import {connect} from 'react-redux';


function SortingForm({ activeSortType }) {
  const [isSortOpen, toggleIsSortActive] = useState(false);

  const handleSortTypeClick = () => {
    toggleIsSortActive((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleSortTypeClick}
      >
        { activeSortType }
        <svg className="places__sorting-arrow" style={{width: '7', height: '4'}}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isSortOpen && <SortingOptionsList handleSortTypeClick={handleSortTypeClick}/>}
    </form>
  );
}


const mapStateToProps = ({ activeSortType}) =>({
  activeSortType: activeSortType
});


export { SortingForm };
export default connect(mapStateToProps)(SortingForm);
