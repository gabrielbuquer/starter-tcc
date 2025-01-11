import { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

import { StyledPageLayout } from './PageLayout.styled';
import { Footer, Header, Main } from './components';

export type PageLayoutPropTypes = {
  id: string;
  testId: string;
  children: ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
  }
`;

export default GlobalStyle;

export function PageLayout({ children, testId, id }: PageLayoutPropTypes) {
  return (
    <StyledPageLayout id={id} data-testid={testId}>
      <GlobalStyle />
      {children}
    </StyledPageLayout>
  );
}

PageLayout.Header = Header;
PageLayout.Main = Main;
PageLayout.Footer = Footer;
