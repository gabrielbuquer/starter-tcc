import { GetServerSideProps } from 'next';

import { FinanceLayout, TransactionScreen } from '@monetix/feature/finances';

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
  return <FinanceLayout>{page}</FinanceLayout>;
};

export default TransactionsSummaryPage;
