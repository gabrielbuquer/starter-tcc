import { GetServerSideProps } from 'next';

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
  return (
    <TransactionTableContextProvider>
      <TransactionScreen />
    </TransactionTableContextProvider>
  );
};

TransactionsSummaryPage.getLayout = (page: React.ReactNode) => {
  return <FinanceLayout>{page}</FinanceLayout>;
};

export default TransactionsSummaryPage;
