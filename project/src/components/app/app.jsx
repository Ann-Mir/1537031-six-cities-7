import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainPage from '../pages/main-page/main-page';
import {AppRoute, MAX_ROOMS_PER_PAGE} from '../../const';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import offerPropTypes from '../offer.prop';
import {isCheckedAuth} from '../../utils/common';
import LoadingScreen from '../loading-screen/loadingScreen';

function App({ offers, authorizationStatus, isDataLoaded }) {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route
          exact
          path={AppRoute.ROOM}
          render={({ match }) => <RoomPage
            offers={offers.slice(0, MAX_ROOMS_PER_PAGE)}
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

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(mapStateToProps)(App);
