import { env } from './env';

export const appConfig = {
  api: {
    baseUrl: env.apiBaseUrl,
    timeout: 30000,
  },
} as const;
