import { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  mainLayoutProps?: (page: ReactElement) => ReactNode;
};
