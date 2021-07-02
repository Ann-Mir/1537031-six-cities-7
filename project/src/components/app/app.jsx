import React from 'react';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../pages/main-page/main-page';
import {AppRoute} from '../../const';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import browserHistory from '../../browser-history';

function App() {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}>
        </PrivateRoute>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route
          exact
          path={AppRoute.ROOM}
          render={() => <RoomPage />}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
