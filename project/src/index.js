import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const SETTINGS = {
  placesCount: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={SETTINGS.placesCount}
    />
  </React.StrictMode>,
  document.getElementById('root'));
