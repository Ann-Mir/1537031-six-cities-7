import axios from 'axios';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  const onRequest = (config) => {
    config.headers['x-token'] = localStorage.getItem('token');

    return config;
  };

  api.interceptors.response.use(onSuccess, onFail);
  api.interceptors.request.use(onRequest);

  return api;
};
