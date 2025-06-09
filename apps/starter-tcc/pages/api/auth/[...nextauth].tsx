import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  type: string;
  birthDate: string;
  classroom: string | null;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        const res = await fetch(`${process.env.API_URL}/auth/sign-in`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        if (!res.ok) return null;

        const data = await res.json();

        return {
          id: data.id,
          name: data.name,
          email: data.email,
          type: data.type,
          birthDate: data.birthDate,
          classroom: data.classroom,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          expiresIn: '1d',
        };
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
        expiresIn: '1d',
      };
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
