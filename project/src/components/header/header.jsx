import React from 'react';
import Logo from '../logo/logo';
import {LogoTypes} from '../../settings';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import HeaderNavAuthorized from '../header-nav-authorized/header-nav-authorized';
import HeaderNavGuest from '../header-nav-guest/header-nav-guest';
import {getAuthorizationStatus, getUserAvatar, getUserEmail} from '../../store/user/selectors';


function Header() {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const email = useSelector(getUserEmail);
  const avatarUrl = useSelector(getUserAvatar);

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


export default Header;
