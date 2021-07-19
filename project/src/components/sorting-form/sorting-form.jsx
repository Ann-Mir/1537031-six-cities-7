import React, {useState} from 'react';
import SortingOptionsList from '../sorting-options-list/sorting-options-list';
import {useSelector} from 'react-redux';
import {getActiveSortType} from '../../store/ui/selectors';


function SortingForm() {

  const activeSortType = useSelector(getActiveSortType);

  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSortTypeClick = () => {
    setIsSortOpen((prevState) => !prevState);
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
      {isSortOpen && <SortingOptionsList onSortTypeClick={handleSortTypeClick} onSetIsSortOpen={setIsSortOpen}/>}
    </form>
  );
}


export default SortingForm;
