import './global.css';
import dynamic from 'next/dynamic';

import type { NextPageWithLayout } from '@monetix/shared/config';
import type { MonetixProviderPropsType } from '@monetix/shared/ui';

import type { AppProps } from 'next/app';

const MonetixProvider = dynamic(
  () =>
    import('@monetix/shared/ui').then(({ MonetixProvider }) => MonetixProvider),
  { ssr: true },
);

const MainLayout = dynamic(
  () => import('@monetix/shared/ui').then(({ MainLayout }) => MainLayout),
  { ssr: true },
);

type PageProps = MonetixProviderPropsType;

type MyAppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: PageProps;
  menu: string[];
};

export default function CustomApp({
  Component,
  pageProps,
}: MyAppPropsWithLayout) {
  const mainLayoutProps = Component.mainLayoutProps;

  const getLayout =
    Component.getLayout ||
    ((page) => (
      <MainLayout
        {...mainLayoutProps}
        bgColor={pageProps.bgColor}
        centeredContent={pageProps.centeredContent}
        hasMargin={pageProps.hasMargin}
        hasContainer={pageProps.hasContainer}
        simpleHeader={pageProps.simpleHeader}
      >
        {page}
      </MainLayout>
    ));

  const componentLayout = getLayout(<Component {...pageProps} />);

  return (
    <MonetixProvider swrFallback={pageProps.fallback}>
      {/* <Head>
        <title>CEFET-IN</title>
        <meta name="description" content="Sistema de gestão de presença para alunos do CEFET-RJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {componentLayout}
    </MonetixProvider>
  );
}
