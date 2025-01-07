import { Html, Head, Main, NextScript } from "next/document";
import { montserrat } from '@monetix/shared/config';

export default function Document() {
  return (
    <Html lang="en" className={montserrat.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
