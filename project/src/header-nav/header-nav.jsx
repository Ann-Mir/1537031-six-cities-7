import React from 'react';
import HeaderNavAuthorized from '../components/header-nav-authorized/header-nav-authorized';
import HeaderNavGuest from '../components/header-nav-guest/header-nav-guest';
import {AuthorizationStatus} from '../const';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


function HeaderNav( { authorizationStatus }) {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <HeaderNavAuthorized />
  };

  return <HeaderNavGuest />
}


HeaderNav.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus : state.authorizationStatus,
});

export {HeaderNav};
export default connect(mapStateToProps)(HeaderNav);
