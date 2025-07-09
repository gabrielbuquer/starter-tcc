import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import {
  FinanceLayout,
  SummaryContextProvider,
  SummaryScreen,
} from '@monetix/feature/finances';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
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
