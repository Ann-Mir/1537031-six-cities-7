import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import {AppRoute} from '../../const';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import offerPropTypes from '../offer.prop';

function App({ offers }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route
          exact
          path={AppRoute.ROOM}
          render={({ match }) => <RoomPage
            offers={offers.slice(0, 3)}
            currentOffer={offers.find((item) => item.id === Number(match.params.id))}
            onReviewSubmit={() => {}}
          />}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default App;
