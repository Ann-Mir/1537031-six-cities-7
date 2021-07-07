import React from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from 'react-redux';
import {SortTypes} from '../../const';
import {setSortType} from '../../store/action';
import {getActiveSortType} from '../../store/ui/selectors';


function SortingOption({ sortingType, handleSortTypeClick }) {

  const activeSortType = useSelector(getActiveSortType);

  const dispatch = useDispatch();

  const handleSortOptionClick = () => {
    dispatch(setSortType(SortTypes[sortingType]));
    handleSortTypeClick();
  };

  return (
    <li
      className={`places__option ${SortTypes[sortingType] === activeSortType ? 'places__option--active' : ''}`}
      tabIndex="0"
      data-sort={sortingType}
      onClick={handleSortOptionClick}
    >
      {SortTypes[sortingType]}
    </li>
  );
}

SortingOption.propTypes = {
  sortingType: PropTypes.string.isRequired,
  handleSortTypeClick: PropTypes.func.isRequired,
};


export default SortingOption;
