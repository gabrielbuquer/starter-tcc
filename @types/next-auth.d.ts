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
      expiresIn: number;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    accessToken: string;
    expiresIn: number;
  }
}
