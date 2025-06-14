export interface AuthUser {
  id: string;
  name: string;
  email: string;
  type: string;
  birthDate: string;
  classroom: string | null;
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: string;
  refreshTokenExpires: string;
}

export type UserType = {
  id: string;
  name: string;
  email: string;
};
