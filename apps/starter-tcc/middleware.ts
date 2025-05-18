// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { getBaseUrls } from '@monetix/shared/config';

export async function middleware(req: NextRequest) {
  const { LOGIN } = getBaseUrls();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && req.nextUrl.pathname !== LOGIN) {
    return NextResponse.redirect(new URL(LOGIN, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|static|favicon.ico|_next).*)'],
};
