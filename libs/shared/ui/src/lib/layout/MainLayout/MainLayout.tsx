import dynamic from 'next/dynamic';
import { ReactNode} from 'react';

import { LayoutContainer } from './MainLayout.styled';

const Header = dynamic(() =>
  import('../../patterns/Header').then(({ Header }) => Header),
);

const Footer = dynamic(() =>
  import('../../patterns/Footer').then(({ Footer }) => Footer),
);

type MainLayoutPropsTypes = {
  children: ReactNode;
  simpleHeader?: boolean;
};

export const MainLayout = ({
  children,
  simpleHeader = false,
}: MainLayoutPropsTypes) => {

  console.log(simpleHeader);

  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
      {/* <PageLayout id="page-layout" testId="page-layout">
        {!isContentOnly && (
          <>
            <PageLayout.Header
              background="brand.primary"
              id="header-layout"
              testId="header-layout"
            >
              <Header userData={userData} />
            </PageLayout.Header>
            <PageLayout.Nav
              background="neutral.100"
              id="nav-layout"
              testId="nav-layout"
            >
              <MenuWithHydrationOnDemand
                menuData={menuData}
                userData={userData}
              />
            </PageLayout.Nav>
          </>
        )}
        <PageLayout.Main
          fullHeight={fullHeight}
          hasContainer={hasContainer}
          hasMargin={hasMargin}
          background={background}
          backgroundOpacity={backgroundOpacity}
          id="main-layout"
          testId="main-layout"
        >
          {children}
        </PageLayout.Main>
        {!isContentOnly && (
          <PageLayout.Footer
            background="neutral.300"
            id="footer-layout"
            testId="footer-layout"
            hasMargin={false}
          >
            <FooterWithHydrationOnDemand />
          </PageLayout.Footer>
        )}
        <Backdrop visible={blockScreen} />
      </PageLayout> */}
    </LayoutContainer>
  );
};
