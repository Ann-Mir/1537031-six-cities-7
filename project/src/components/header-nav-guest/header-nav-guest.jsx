import React from 'react';


function HeaderNavGuest() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavGuest;
