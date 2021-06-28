import React from 'react';
import Logo from '../logo/logo';
import {LogoTypes} from '../../settings';
import HeaderNav from '../../header-nav/header-nav';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

function Header({ authorizationStatus }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType={LogoTypes.HEADER} />
          </div>
          <HeaderNav authorizationStatus={authorizationStatus}/>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps)(Header)
