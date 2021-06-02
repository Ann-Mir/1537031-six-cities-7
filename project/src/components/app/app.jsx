import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from "prop-types";

function App({ placesCount }) {
  return (
    <MainPage placesCount={placesCount}/>
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
