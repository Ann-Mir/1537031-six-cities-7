import React from 'react';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../pages/main-page/main-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Switch, Route} from 'react-router-dom';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App() {

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPage />
      </Route>
      <PrivateRoute
        exact
        allowedStatus={AuthorizationStatus.AUTH}
        path={AppRoute.FAVORITES}
        redirect={AppRoute.LOGIN}
        render={() => <FavoritesPage />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.LOGIN}>
        <PrivateRoute
          exact
          allowedStatus={AuthorizationStatus.NO_AUTH}
          path={AppRoute.LOGIN}
          redirect={AppRoute.ROOT}
          render={() => <LoginPage />}
        >
        </PrivateRoute>
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

  );
}


export default App;
