import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SortingOptionsList from '../sorting-options-list/sorting-options-list';
import {connect} from 'react-redux';
import {getActiveSortType} from "../../store/ui/selectors";


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


SortingForm.propTypes = {
  activeSortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) =>({
  activeSortType: getActiveSortType(state),
});


export { SortingForm };
export default connect(mapStateToProps)(SortingForm);
