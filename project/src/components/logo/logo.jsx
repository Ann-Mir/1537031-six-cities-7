import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {LOGO_SETTINGS} from '../../settings';
import {AppRoute} from '../../const';

function Logo({ logoType }) {

  return (
    <Link className={`${LOGO_SETTINGS[logoType].CLASS_MIX}__logo-link`} to={AppRoute.ROOT}>
      <img
        className={`${LOGO_SETTINGS[logoType].CLASS_MIX}__logo`}
        src="../img/logo.svg"
        alt="6 cities logo"
        style={{width: LOGO_SETTINGS[logoType].WIDTH, height: LOGO_SETTINGS[logoType].HEIGHT}}
      />
    </Link>
  );
}

Logo.propTypes = {
  logoType: PropTypes.string.isRequired,
};


export default Logo;
