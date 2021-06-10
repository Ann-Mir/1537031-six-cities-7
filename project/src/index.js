import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const SETTINGS = {
  placesCount: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={SETTINGS.placesCount}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
