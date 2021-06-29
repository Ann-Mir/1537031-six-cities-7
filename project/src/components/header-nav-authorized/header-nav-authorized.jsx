import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


function HeaderNavAuthorized({ username, logoutApp }) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{username}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            onClick={(evt) => {
              evt.preventDefault();
              logoutApp();
            }}
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
