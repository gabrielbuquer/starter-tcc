import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => {
    return (
      <>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.newDataLayer = window.newDataLayer || [];
            `,
          }}
        />
        <RouterContext.Provider
          value={{
            push: () => Promise.resolve(),
            replace: () => Promise.resolve(),
            prefetch: () => Promise.resolve(),
            events: {
              on: () => Promise.resolve(),
              off: () => Promise.resolve(),
              emit: () => Promise.resolve(),
            },
          }}
        >
          <ThemeProvider theme={{}}>
            <Story />
          </ThemeProvider>
        </RouterContext.Provider>
      </>
    );
  },
];

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'white',
  },
  viewport: {
    viewports: {
      mobile: {
        ...INITIAL_VIEWPORTS.galaxys5,
        name: 'Mobile',
      },
      tablet: {
        ...INITIAL_VIEWPORTS.ipad,
        name: 'Tablet',
      },
      desktop: {
        name: 'Desktop',
        styles: {
          height: '768px',
          width: '1024px',
        },
        type: 'desktop',
      },
      desktopLarge: {
        name: 'Desktop Large',
        styles: {
          height: '768px',
          width: '1920px',
        },
        type: 'desktop',
      },
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
