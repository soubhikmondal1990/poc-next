import axios from 'axios';

export const createApiClient = (baseURL: string, timeout: number) => {
  return axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
