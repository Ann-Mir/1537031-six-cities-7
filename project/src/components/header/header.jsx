import React from 'react';
import Logo from '../logo/logo';
import {LogoTypes} from '../../settings';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import HeaderNavAuthorized from '../header-nav-authorized/header-nav-authorized';
import HeaderNavGuest from '../header-nav-guest/header-nav-guest';

function Header({ username, avatarUrl, authorizationStatus }) {
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
                && <HeaderNavAuthorized username={username} avatarUrl={avatarUrl}/>
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
  username: PropTypes.string,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  username: USER.user.name,
  avatarUrl: USER.user.avatarUrl,
});


export {Header};
export default connect(mapStateToProps)(Header)
