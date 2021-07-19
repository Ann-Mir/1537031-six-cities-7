import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import {LOGO_SETTINGS} from '../../settings';
import {AppRoute} from '../../const';

function Logo({ logoType }) {

  return (
    <NavLink
      className={`${LOGO_SETTINGS[logoType].CLASS_MIX}__logo-link`}
      activeClassName="header__logo-link--active"
      exact
      to={AppRoute.ROOT}
    >
      <img
        className={`${LOGO_SETTINGS[logoType].CLASS_MIX}__logo`}
        src="../img/logo.svg"
        alt="6 cities logo"
        style={{width: LOGO_SETTINGS[logoType].WIDTH, height: LOGO_SETTINGS[logoType].HEIGHT}}
      />
    </NavLink>
  );
}

Logo.propTypes = {
  logoType: PropTypes.string.isRequired,
};


export default Logo;
