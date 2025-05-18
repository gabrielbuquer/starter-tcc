import { BaseUrlsType } from './types';

export const BASE_URL_CONFIG = {
  HOME: '/',
  LOGIN: '/login',
};

export const getBaseUrls = (): BaseUrlsType => BASE_URL_CONFIG;
