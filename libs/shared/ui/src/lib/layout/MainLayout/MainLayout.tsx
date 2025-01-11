import dynamic from 'next/dynamic';
import { ReactNode} from 'react';

import { LayoutContainer } from './MainLayout.styled';
import { PageLayout } from '../../components';

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

  return (
    <LayoutContainer>
      <PageLayout id="main-layout" testId="main-layout">
        <PageLayout.Header>
          <Header simpleHeader={simpleHeader} />
        </PageLayout.Header>
        <PageLayout.Main>
          {children}
        </PageLayout.Main>
        <PageLayout.Footer id="footer" testId="footer">
          <Footer />
        </PageLayout.Footer>
      </PageLayout>
    </LayoutContainer>
  );
};
