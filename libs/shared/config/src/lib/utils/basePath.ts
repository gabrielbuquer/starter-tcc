import { BASE_PATH_CONFIG } from '../constants';

export const withBasePath = (path: string) =>
  `${BASE_PATH_CONFIG}${path}`.replace(/\/{2,}/g, '/');
