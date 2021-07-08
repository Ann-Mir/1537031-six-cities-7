import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {BOOKMARK_BUTTON_SETTINGS} from '../../settings';
import {useDispatch} from 'react-redux';
import {addToFavorites} from '../../store/api-actions';


function BookmarkButton({ offerId, buttonType, isFavorite }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToFavorites({ offerId, status: Number(!isFavorite)}));
  };


  return (
    <button
      className={`${BOOKMARK_BUTTON_SETTINGS[buttonType].CLASS_MIX}__bookmark-button ${isFavorite ? `${BOOKMARK_BUTTON_SETTINGS[buttonType].CLASS_MIX}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${BOOKMARK_BUTTON_SETTINGS[buttonType].CLASS_MIX}__bookmark-icon`}
        style={{width: BOOKMARK_BUTTON_SETTINGS[buttonType].WIDTH, height: BOOKMARK_BUTTON_SETTINGS[buttonType].HEIGHT}}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  buttonType: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default BookmarkButton;
