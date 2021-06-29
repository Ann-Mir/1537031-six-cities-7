import React from 'react';
import Logo from '../logo/logo';
import {LogoTypes} from '../../settings';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import HeaderNavAuthorized from '../header-nav-authorized/header-nav-authorized';
import HeaderNavGuest from '../header-nav-guest/header-nav-guest';
import {logout} from '../../store/api-actions';

function Header({ username, authorizationStatus, logoutApp }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType={LogoTypes.HEADER} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.AUTH
                && <HeaderNavAuthorized logoutApp={logoutApp} username={username} />
                || <HeaderNavGuest />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logoutApp: PropTypes.func.isRequired,
  username: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutApp() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header)
