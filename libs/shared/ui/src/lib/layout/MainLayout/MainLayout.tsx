import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { PageLayout } from '../../components';

import { LayoutContainer } from './MainLayout.styled';

const Header = dynamic(() =>
  import('../../patterns/Header').then(({ Header }) => Header),
);

const Footer = dynamic(() =>
  import('../../patterns/Footer').then(({ Footer }) => Footer),
);

type MainLayoutPropsTypes = {
  children: ReactNode;
  bgColor?: string;
  hasMargin?: boolean;
  hasContainer?: boolean;
  centeredContent?: boolean;
  simpleHeader?: boolean;
};

export const MainLayout = ({
  children,
  bgColor,
  hasMargin = true,
  hasContainer = true,
  centeredContent = false,
  simpleHeader = false,
}: MainLayoutPropsTypes) => {
  return (
    <LayoutContainer>
      <PageLayout id="main-layout" testId="main-layout">
        <PageLayout.Header id="header" testId="header">
          <Header simpleHeader={simpleHeader} />
        </PageLayout.Header>
        <PageLayout.Main
          id="main"
          testId="main"
          bgColor={bgColor}
          centeredContent={centeredContent}
          hasMargin={hasMargin}
          hasContainer={hasContainer}
        >
          {children}
        </PageLayout.Main>
        <PageLayout.Footer id="footer" testId="footer" hasMargin={hasMargin}>
          <Footer />
        </PageLayout.Footer>
      </PageLayout>
    </LayoutContainer>
  );
};
