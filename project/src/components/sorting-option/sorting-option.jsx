import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {SortTypes} from '../../const';
import {setSortType} from '../../store/action';
import {getActiveSortType} from '../../store/ui/selectors';


function SortingOption({ sortingType, onSortTypeClick }) {

  const activeSortType = useSelector(getActiveSortType);

  const dispatch = useDispatch();

  const handleSortOptionClick = () => {
    dispatch(setSortType(SortTypes[sortingType]));
    onSortTypeClick();
  };

  return (
    <li
      className={`places__option ${SortTypes[sortingType] === activeSortType ? 'places__option--active' : ''}`}
      tabIndex="0"
      data-sort={sortingType}
      onClick={handleSortOptionClick}
      data-testid="sort-option"
    >
      {SortTypes[sortingType]}
    </li>
  );
}

SortingOption.propTypes = {
  sortingType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
};


export default memo(SortingOption);
