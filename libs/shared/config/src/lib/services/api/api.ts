import { InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

import {
  HttpClientRequestConfig,
  corsRequestConfig,
  getClientHeaders,
  httpClient,
} from '@monetix/core-utils';

export const baseURL = process.env.API_URL;

export const api = httpClient(
  {
    baseUrl: 'http://localhost:3000/api',
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
  let headers = {
    ...config.headers,
  };
  const session = await getSession();

  const token = session?.user?.accessToken;

  headers = {
    ...headers,
    Authorization: token ? `Bearer ${token}` : '',
  };

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
