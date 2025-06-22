import { Head, Html, Main, NextScript } from 'next/document';

import { montserrat } from '@monetix/shared/config';

export default function Document() {
  return (
    <Html lang="pt-br" className={montserrat.variable}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
