import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {requireAuthorization} from './store/action';
import {checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';
import {configureStore} from "@reduxjs/toolkit";


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk.withExtraArgument(api)),
//     applyMiddleware(redirect),
//   ),
// );

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
