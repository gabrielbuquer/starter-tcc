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

const theme = createTheme({});

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
