import { isProdEnv } from '@monetix/core-utils';

import { withBasePath } from '../utils/basePath';

import { BaseUrlsType } from './types';

export const BASE_URL_CONFIG = {
  HOME: '/',
  FINANCE: '/financas',
  FINANCE_TRANSACTIONS: '/financas/transacoes',
  COURSE: '/cursos',
  FINANCE_GOALS: '/financas/metas',
  TEACHER: '/professor',
  TEACHER_CLASSES: '/professor/aulas',
  TEACHER_STUDENTS: '/professor/alunos',
  LOGIN: '/login',
};

export const getBasePathUrls = (): BaseUrlsType => {
  if (isProdEnv) {
    const entries = Object.entries(BASE_URL_CONFIG).map(([key, value]) => [
      key,
      withBasePath(value),
    ]);
    return Object.fromEntries(entries) as BaseUrlsType;
  }
  return BASE_URL_CONFIG;
};

export const getBaseUrls = (): BaseUrlsType => BASE_URL_CONFIG;
