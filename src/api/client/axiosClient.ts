import { appConfig } from '@/config/appConfig';
import { createApiClient } from './createApiClient';
import { requestInterceptor } from '../interceptors/requestInterceptor';
import {
  responseErrorInterceptor,
  responseSuccessInterceptor,
} from '../interceptors/responseInterceptor';

export const axiosClient = createApiClient(
  appConfig.api.baseUrl,
  appConfig.api.timeout
);

axiosClient.interceptors.request.use(requestInterceptor);

axiosClient.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
);
