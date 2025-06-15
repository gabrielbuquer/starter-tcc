import { AuthUser, api, getPaths } from '@monetix/shared/config';

import { SignInData, SignUpData } from './types';

const API_PATHS = getPaths();

export const authSignIn = (data: SignInData): Promise<AuthUser> => {
  return api
    .post<AuthUser, SignInData>(`${API_PATHS.AUTH_API}/sign-in`, data)
    .then((res) => res.data);
};

export const authSignUp = (data: SignUpData): Promise<AuthUser> => {
  return api
    .post<AuthUser, SignUpData>(`${API_PATHS.AUTH_API}/sign-up`, data)
    .then((res) => res.data);
};

export const refreshToken = (refreshToken: string): Promise<AuthUser> => {
  return api
    .post<
      AuthUser,
      { refreshToken: string }
    >(`${API_PATHS.AUTH_API}/refresh-token`, { refreshToken })
    .then((res) => res.data);
};
