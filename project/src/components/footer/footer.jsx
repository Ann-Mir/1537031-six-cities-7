import React from 'react';
import Logo from '../logo/logo';
import {LogoTypes} from '../../settings';

function Footer() {
  return (
    <footer className="footer container">
      <Logo logoType={LogoTypes.FOOTER} />
    </footer>
  );
}

export default Footer;
