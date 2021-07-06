import React from 'react';
import Logo from '../logo/logo';
import {LogoTypes} from '../../settings';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import HeaderNavAuthorized from '../header-nav-authorized/header-nav-authorized';
import HeaderNavGuest from '../header-nav-guest/header-nav-guest';
import {getAuthorizationStatus, getUserAvatar, getUserEmail, getUserName} from "../../store/user/selectors";

function Header({ email, avatarUrl, authorizationStatus }) {
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
                && <HeaderNavAuthorized email={email} avatarUrl={avatarUrl}/>
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
  email: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getUserEmail(state),
  avatarUrl: getUserAvatar(state),
});


export {Header};
export default connect(mapStateToProps)(Header)
