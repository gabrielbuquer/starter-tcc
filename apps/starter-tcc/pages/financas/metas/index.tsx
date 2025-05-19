import { GetServerSideProps } from 'next';

import { FinanceLayout, GoalsScreen } from '@monetix/feature/finances';

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

const GoalsSummaryPage = () => {
  return <GoalsScreen />;
};

GoalsSummaryPage.getLayout = (page: React.ReactNode) => {
  return <FinanceLayout>{page}</FinanceLayout>;
};

export default GoalsSummaryPage;
