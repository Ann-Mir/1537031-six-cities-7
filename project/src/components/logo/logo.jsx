import React from 'react';
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <Link className="header__logo-link" to="/">
      <img
        className="header__logo"
        src="../img/logo.svg"
        alt="6 cities logo"
        style={{width: '81', height: '41'}}
      />
    </Link>
  );
}

export default Logo;
