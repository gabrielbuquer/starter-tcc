import { TransactionScreen } from '@monetix/feature/finances';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return {
      props: {
        centeredContent: false,
        simpleHeader: false,
        hasContainer: true,
        hasMargin: true,
        hasQuickMenu: true,
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
    <TransactionScreen />
  )
}

export default TransactionsSummaryPage;
