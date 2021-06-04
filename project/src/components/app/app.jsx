import React from 'react';
import MainPage from '../pages/main-page/main-page';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App({ placesCount }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            placesCount={placesCount}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
