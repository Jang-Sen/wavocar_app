import type { InternalAxiosRequestConfig } from 'axios';
import appConfig from '../../configs/app.config';
import {
  REQUEST_HEADER_AUTH_KEY,
  TOKEN_NAME_IN_STORAGE,
  TOKEN_TYPE,
} from '../../constants/api.constant';

const AxiosRequestIntrceptorConfigCallback = (
  config: InternalAxiosRequestConfig,
) => {
  const storage = appConfig.accessTokenPersistStrategy;

  if (storage === 'localStorage' || storage === 'sessionStorage') {
    let accessToken = '';

    if (storage === 'localStorage') {
      accessToken = localStorage.getItem(TOKEN_NAME_IN_STORAGE) || '';
    }

    if (storage === 'sessionStorage') {
      accessToken = sessionStorage.getItem(TOKEN_NAME_IN_STORAGE) || '';
    }

    if (accessToken) {
      config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
    }
  }

  return config;
};

export default AxiosRequestIntrceptorConfigCallback;
