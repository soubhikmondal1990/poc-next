import { InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.set('Content-Type', 'application/json');

  return config;
};
