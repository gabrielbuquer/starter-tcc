import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { NextSeo } from 'next-seo';

import {
  FinanceLayout,
  SummaryContextProvider,
  SummaryScreen,
} from '@monetix/feature/finances';
import { getPaths } from '@monetix/shared/config';

import { authOptions } from '../api/auth/[...nextauth]';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_PATHS = getPaths();
  const session = await getServerSession(context.req, context.res, authOptions);
  try {
    console.log('Session:', session, API_PATHS);
    // TODO: Implement data fetching here
    return {
      props: {
        centeredContent: false,
        simpleHeader: false,
        hasContainer: true,
        hasMargin: true,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const FinanceSummaryPage = () => {
  return <SummaryScreen />;
};

FinanceSummaryPage.getLayout = (page: React.ReactNode) => {
  return (
    <SummaryContextProvider>
      <NextSeo title="Finanças" />
      <FinanceLayout>{page}</FinanceLayout>
    </SummaryContextProvider>
  );
};

export default FinanceSummaryPage;
