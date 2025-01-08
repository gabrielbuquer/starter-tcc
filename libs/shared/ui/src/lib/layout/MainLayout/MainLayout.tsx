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
      <PageLayout id="page-layout" testId="page-layout">
        <PageLayout.Header>
          <Header />
        </PageLayout.Header>
        <PageLayout.Main>
          {children}
        </PageLayout.Main>
        <PageLayout.Footer>
          <Footer />
        </PageLayout.Footer>
      </PageLayout>
    </LayoutContainer>
  );
};
