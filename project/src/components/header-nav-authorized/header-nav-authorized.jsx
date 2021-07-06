import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDispatch} from "react-redux";
import {logout} from "../../store/action";


function HeaderNavAuthorized({ username, avatarUrl }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} alt={'avatar'} style={{borderRadius: '50%'}}/>
            </div>
            <span className="header__user-name user__name">{username}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            onClick={handleClick}
            to={AppRoute.ROOT}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}


HeaderNavAuthorized.propTypes = {
  logoutApp: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};


export default HeaderNavAuthorized;
