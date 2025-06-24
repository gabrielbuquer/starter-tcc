import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authSignIn, refreshToken } from '@monetix/feature/login';
import { AuthUser } from '@monetix/shared/config';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        try {
          const authData = await authSignIn({
            username: credentials?.username || '',
            password: credentials?.password || '',
          });

          if (!authData || !authData.id) return null;

          return {
            id: authData.id,
            name: authData.name,
            email: authData.email,
            type: authData.type,
            birthDate: authData.birthDate,
            classroom: authData.classroom,
            accessToken: authData.accessToken,
            refreshToken: authData.refreshToken,
            accessTokenExpires: authData.accessTokenExpires,
            refreshTokenExpires: authData.refreshTokenExpires,
          };
        } catch {
          console.error('Error during authorization');
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      const isAccessTokenExpired =
        new Date(token.accessTokenExpires as string) < new Date();

      if (isAccessTokenExpired) {
        try {
          const refreshedUser = await refreshToken(
            token.refreshToken as string,
          );

          return {
            ...token,
            ...refreshedUser,
          };
        } catch (error) {
          console.error('Error refreshing token:', error);
          return token;
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        type: token.type as 'student' | 'teacher',
        birthDate: token.birthDate as string,
        classroom: token.classroom as string | null,
        accessToken: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        accessTokenExpires: token.accessTokenExpires as string,
        refreshTokenExpires: token.refreshTokenExpires as string,
      };
      return session;
    },
  },
  pages: {
    signIn: '/monetix/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
