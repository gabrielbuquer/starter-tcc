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
        // bgColor: 'primary.main',
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
  return (
    <SummaryScreen />
  )
}

export default FinanceSummaryPage;
