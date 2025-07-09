import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import {
  FinanceLayout,
  TransactionScreen,
  TransactionTableContextProvider,
} from '@monetix/feature/finances';

export const getServerSideProps: GetServerSideProps = async () => {
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

const TransactionsSummaryPage = () => {
  return <TransactionScreen />;
};

TransactionsSummaryPage.getLayout = (page: React.ReactNode) => {
  return (
    <TransactionTableContextProvider>
      <NextSeo title="Transações" />
      <FinanceLayout>{page}</FinanceLayout>
    </TransactionTableContextProvider>
  );
};

export default TransactionsSummaryPage;
