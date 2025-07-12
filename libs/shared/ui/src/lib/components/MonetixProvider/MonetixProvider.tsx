import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import { NextSeo } from 'next-seo';

import { isProdEnv } from '@monetix/core-utils';
import { getBasePathUrls, getBasePaths } from '@monetix/shared/config';

import { MetaTags } from '../MetaTags';
import { Preconnect } from '../Preconnect';
import { SwrProvider, SwrProviderPropsType } from '../SwrProvider';
import { SnackBar } from '../SnackBar';
import { RouteLoader } from '../Loader';

export type MonetixProviderPropsType = SwrProviderPropsType & {
  children: ReactNode;
};

const preconnectUrls = ['google.com'];

const theme = createTheme({
  typography: {
    fontFamily: [
      'var(--font-montserrat)',
      'Montserrat',
      'sans-serif',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
    ].join(','),
    h1: {
      fontSize: '32px',
      lineHeight: '34px',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '26px',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '22px',
    },
    h4: {
      fontSize: '16px',
      lineHeight: '18px',
    },
    h5: {
      fontSize: '14px',
      lineHeight: '16px',
    },
    h6: {
      fontSize: '12px',
      lineHeight: '14px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '18px',
    },
    body2: {
      fontSize: '12px',
      lineHeight: '14px',
    },
    caption: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
  palette: {
    text: {
      primary: '#111',
      secondary: '#333',
    },
    primary: {
      main: '#2c597b',
      light: '#73a1c8',
    },
    background: {
      default: '#f2f4f8',
    },
  },
});

export const MonetixProvider = ({
  children,
  swrFallback,
}: MonetixProviderPropsType) => {
  const { NEXT_AUTH_API } = getBasePaths();
  return (
    <>
      <Head>
        <MetaTags />
        <Preconnect urlsList={preconnectUrls} />
      </Head>
      <SessionProvider basePath={NEXT_AUTH_API}>
        <SwrProvider swrFallback={swrFallback}>
          <ThemeProvider theme={theme}>
            <NextSeo titleTemplate="%s | Monetix" />
            {children}
            <SnackBar />
            <RouteLoader />
          </ThemeProvider>
        </SwrProvider>
      </SessionProvider>
    </>
  );
};
