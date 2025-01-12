import type { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>> =
  NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
    mainLayoutProps?: (page: ReactElement) => ReactNode;
  };
