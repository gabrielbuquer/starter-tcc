import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      birthDate: string;
      classroom: string | null;
      type: 'student' | 'teacher';
      accessToken: string;
      refreshToken: string;
      expiresIn: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    accessToken: string;
    expiresIn: string;
  }
}
