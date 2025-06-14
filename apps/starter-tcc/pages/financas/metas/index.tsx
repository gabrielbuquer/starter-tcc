import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import {
  FinanceLayout,
  GoalsScreen,
  GoalsTableContextProvider,
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

const GoalsSummaryPage = () => {
  return <GoalsScreen />;
};

GoalsSummaryPage.getLayout = (page: React.ReactNode) => {
  return (
    <GoalsTableContextProvider>
      <NextSeo title="Metas" />
      <FinanceLayout>{page}</FinanceLayout>
    </GoalsTableContextProvider>
  );
};

export default GoalsSummaryPage;
