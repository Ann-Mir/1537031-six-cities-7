import React from 'react';
import {BOOKMARK_BUTTON_SETTING} from '../../settings';


function BookmarkButton({ offerId, buttonType, isFavorite }) {

  return (
    <button
      className={`${BOOKMARK_BUTTON_SETTING[buttonType].CLASS_MIX}__bookmark-button ${isFavorite ? `${BOOKMARK_BUTTON_SETTING[buttonType].CLASS_MIX}__bookmark-button--active` : ''} button`}
      type="button"
    >
      <svg
        className={`${BOOKMARK_BUTTON_SETTING[buttonType].CLASS_MIX}__bookmark-icon`}
        style={{width: BOOKMARK_BUTTON_SETTING[buttonType].WIDTH, height: BOOKMARK_BUTTON_SETTING[buttonType].HEIGHT}}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
