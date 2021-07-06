import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortTypes} from '../../const';
import {setSortType} from '../../store/action';


function SortingOption({ sortingType, activeSortType, handleSortTypeClick, setSortType}) {

  const handleSortOptionClick = () => {
    setSortType(SortTypes[sortingType]);
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
  activeSortType: PropTypes.string.isRequired,
  handleSortTypeClick: PropTypes.func.isRequired,
  setSortType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});


const mapDispatchToProps = (dispatch) => {
  return {
    setSortType: sortingType => dispatch(setSortType(sortingType))
  }
}


export {SortingOption};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOption);
