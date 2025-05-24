import { InternalAxiosRequestConfig } from 'axios';

import {
  HttpClientRequestConfig,
  corsRequestConfig,
  getClientHeaders,
  httpClient,
} from '@monetix/core-utils';

// import { getSession } from '../auth';

export const baseURL = process.env.API_URL;

export const api = httpClient(
  {
    baseUrl: baseURL,
  },
  {
    headers: {
      ...getClientHeaders(),
    },
    timeout: 50000,
  },
  {
    onError: (error) => {
      throw error;
    },
  },
);

export const getHeaders = async (config: HttpClientRequestConfig) => {
  const headers = {
    ...config.headers,
  };

  // if (config.useAuthorization as boolean) {
  //   const session = await getSession();
  //   headers = {
  //     ...headers,
  //     Authorization: session?.access_token
  //       ? `Bearer ${session.access_token}`
  //       : '',
  //     clientToken: session?.x_client_token || '',
  //   };
  // } else {
  //   headers = {
  //     ...headers,
  //     Authorization: '',
  //   };
  // }

  return headers;
};

api.client.interceptors.request.use(
  async (config: HttpClientRequestConfig) => {
    const headers = await getHeaders(config);

    config.headers = headers;

    const newConfig = corsRequestConfig(config);

    return newConfig as InternalAxiosRequestConfig;
  },
  function (error) {
    return Promise.reject(error);
  },
);
