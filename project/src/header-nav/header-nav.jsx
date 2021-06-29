import React from 'react';
import HeaderNavAuthorized from '../components/header-nav-authorized/header-nav-authorized';
import HeaderNavGuest from '../components/header-nav-guest/header-nav-guest';
import {AuthorizationStatus} from '../const';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function HeaderNav( props) {
  if (props.authorizationStatus === AuthorizationStatus.AUTH) {
    return <HeaderNavAuthorized />
  };

  return <HeaderNavGuest />
}


export default HeaderNav;
