import axios, { AxiosError } from 'axios';

import { httpAgent } from '../httpAgent';

import {
  HttpClientAxiosConfig,
  HttpClientConstructor,
  HttpClientInstance,
  HttpClientRequestConfig,
} from './types';

type Callbacks = {
  onError?: (error: AxiosError) => never;
};

const httpAgentConfig = httpAgent();

export const httpClient = <Model>(
  { baseUrl, endpoint }: HttpClientConstructor,
  config: HttpClientAxiosConfig<Model>,
  callbacks: Callbacks = {},
) => {
  const fullBaseUrl = endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
  const onError =
    callbacks.onError ||
    ((error) => {
      throw error;
    });

  const clientInstance: HttpClientInstance = axios.create({
    baseURL: fullBaseUrl,
    ...config,
    ...httpAgentConfig,
  });

  const get = async <ReturnType = Model>(
    url: string,
    config?: HttpClientAxiosConfig<Model>,
  ) => {
    return await clientInstance.get<ReturnType>(url, config).catch(onError);
  };

  const post = async <ReturnType = Model, DataType = ReturnType>(
    url: string,
    data?: DataType,
    config?: HttpClientRequestConfig,
  ) => {
    return await clientInstance
      .post<ReturnType>(url, data, config)
      .catch(onError);
  };

  const put = async <ReturnType = Model, DataType = ReturnType>(
    url: string,
    data?: DataType,
    config?: HttpClientRequestConfig,
  ) => {
    return await clientInstance
      .put<ReturnType>(url, data, config)
      .catch(onError);
  };

  const patch = async <ReturnType = Model, DataType = ReturnType>(
    url: string,
    data?: Partial<DataType>,
    config?: HttpClientRequestConfig,
  ) => {
    return await clientInstance
      .patch<ReturnType>(url, data, config)
      .catch(onError);
  };

  const del = async <ReturnType = Model>(
    url: string,
    config?: HttpClientRequestConfig,
  ) => {
    return await clientInstance.delete<ReturnType>(url, config).catch(onError);
  };

  return {
    get,
    post,
    put,
    patch,
    del,
    client: clientInstance,
  };
};
