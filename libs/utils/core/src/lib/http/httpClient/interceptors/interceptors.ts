import { AxiosRequestConfig } from 'axios';

import { isProdEnv, isServerSide } from '../../../enviroments';

/**
 * For the non production environment we concat a string
 * which bypasses the CORS of the API gateway
 *
 * @param config the axios request config object
 * @returns the new axios request config with force cors parameter
 */
export const corsRequestConfig = (config: AxiosRequestConfig) => {
  const newConfig = { ...config };

  /**
   * When the request is executed on server-side we can't includes the force-cors parameter
   * because the API gateway returns status code 400
   */

  if (!isProdEnv && !isServerSide()) {
    const initialCaracter = newConfig.url?.includes('?') ? '&' : '?';
    newConfig.url += `${initialCaracter}force-cors=-zY8TnWPyUU6nvQj2ABKz^3K%A@*NkbM!Q6Y83^bh9TTnHL5t@mam!$BUTn=eaZ_`;
  }

  return newConfig;
};
