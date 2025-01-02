import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MetaTags } from '../MetaTags';
import { Preconnect } from '../Preconnect';


export type MonetixProviderPropsType = {
    children: ReactNode;
    disableGTM?: boolean;
  };

const preconnectUrls = [

];

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
    ].join(','),
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '24px',
    },
    h3: {
      fontSize: '20px',
    },
    h4: {
      fontSize: '16px',
    },
    h5: {
      fontSize: '14px',
    },
    h6: {
      fontSize: '12px',
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
  },
  palette: {
    text: {
      primary: '#111',
      secondary: '#333',
    },
    primary: {
      main: '#2c597b',
    }
  }
});

export const MonetixProvider = ({
  children,
}: MonetixProviderPropsType) => {
  return (
    <>
      <Head>
        <MetaTags />
        <Preconnect urlsList={preconnectUrls} />
      </Head>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
};
