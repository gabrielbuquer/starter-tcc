import { SummaryScreen } from '@monetix/feature/finances';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query,
  params,
}) => {
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

const FinanceSummaryPage = () => {
  return (
    <SummaryScreen />
  )
}

export default FinanceSummaryPage;
