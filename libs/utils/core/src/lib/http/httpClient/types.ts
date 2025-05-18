import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export interface HttpClientConstructor {
  useHttps?: boolean;
  baseUrl: string;
  endpoint?: string;
}

export type HttpClientInstance = AxiosInstance;

export type HttpClientAxiosConfig<Model> = Omit<
  import('axios').AxiosRequestConfig<Model>,
  'baseURL'
> & { useAuthorization?: boolean };

export type HttpClientRequestConfig = AxiosRequestConfig & {
  useAuthorization?: boolean;
};

export type HttpClientError<T = unknown> = AxiosError<T>;
