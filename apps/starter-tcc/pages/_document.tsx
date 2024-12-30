import { Html, Head, Main, NextScript } from "next/document";
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-montserrat',
});

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
