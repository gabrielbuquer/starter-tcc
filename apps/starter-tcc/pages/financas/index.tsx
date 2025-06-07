import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';

import { FinanceLayout, SummaryScreen } from '@monetix/feature/finances';
import { getPaths } from '@monetix/shared/config';

import { authOptions } from '../api/auth/[...nextauth]';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_PATHS = getPaths();
  const session = await getServerSession(context.req, context.res, authOptions);
  try {
    console.log('Session:', session, API_PATHS);
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
  return <FinanceLayout>{page}</FinanceLayout>;
};

export default FinanceSummaryPage;
