import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { getBasePathUrls, getBaseUrls } from '@monetix/shared/config';

export async function middleware(req: NextRequest) {
  const { LOGIN } = getBaseUrls();
  const { LOGIN: LOGIN_BASE_PATH } = getBasePathUrls();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    if (req.nextUrl.pathname !== LOGIN) {
      return NextResponse.redirect(new URL(LOGIN_BASE_PATH, req.url));
    }
    return NextResponse.next();
  }

  const now = Date.now();

  const accessTokenExpires = token.accessTokenExpires
    ? new Date(token.accessTokenExpires as string).getTime()
    : 0;
  const refreshTokenExpires = token.refreshTokenExpires
    ? new Date(token.refreshTokenExpires as string).getTime()
    : 0;

  const isAccessTokenExpired = accessTokenExpires <= now;
  const isRefreshTokenExpired = refreshTokenExpires <= now;

  if (isAccessTokenExpired && isRefreshTokenExpired) {
    if (req.nextUrl.pathname !== LOGIN) {
      return NextResponse.redirect(new URL(LOGIN_BASE_PATH, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|static|favicon.ico|_next|assets).*)'],
};
