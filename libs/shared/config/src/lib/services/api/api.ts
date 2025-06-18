import { InternalAxiosRequestConfig } from 'axios';

import {
  HttpClientRequestConfig,
  httpClient,
  isClientSide,
} from '@monetix/core-utils';

export const api = httpClient(
  {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  {
    timeout: 50000,
  },
  {
    onError: (error) => {
      throw error;
    },
  },
);

const getHeaders = async (config: HttpClientRequestConfig) => {
  let headers = {
    ...config.headers,
  };

  if (typeof window !== 'undefined') {
    const { getSession } = await import('next-auth/react');
    const session = await getSession();
    // @ts-expect-error token possivelmente não tipado corretamente
    const token = session?.user?.accessToken;

    headers = {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    };
  }

  return headers;
};

api.client.interceptors.request.use(
  async (config: HttpClientRequestConfig) => {
    if (isClientSide()) {
      const headers = await getHeaders(config);

      config.headers = headers;
    }

    return config as InternalAxiosRequestConfig;
  },
  function (error) {
    return Promise.reject(error);
  },
);
