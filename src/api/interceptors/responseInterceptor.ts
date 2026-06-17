import { AxiosError, AxiosResponse } from 'axios';

export const responseSuccessInterceptor = (response: AxiosResponse) => response;

export const responseErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};
