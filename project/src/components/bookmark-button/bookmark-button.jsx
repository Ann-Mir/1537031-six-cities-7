import React from 'react';
import {BOOKMARK_BUTTON_SETTING} from '../../settings';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {redirectToRoute} from '../../store/action';


function BookmarkButton({ offerId, buttonType, isFavorite }) {

  const authorisationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const handleClick = () => {
    if (authorisationStatus === AuthorizationStatus.AUTH) {
      dispatch(addToFavorites({hotel_id: offerId, status: Number(!isFavorite)}));
    } else {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
  };

  return (
    <button
      className={`${BOOKMARK_BUTTON_SETTING[buttonType].CLASS_MIX}__bookmark-button ${isFavorite ? `${BOOKMARK_BUTTON_SETTING[buttonType].CLASS_MIX}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleClick}
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
