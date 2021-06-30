import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loadingScreen';


function LoadWrapper({ isDataLoaded, children, Spinner = LoadingScreen }){
  return (isDataLoaded && children) || <Spinner />;
}

LoadWrapper.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  children: PropTypes.any,
  Spinner: PropTypes.func,
}


export default LoadWrapper;
