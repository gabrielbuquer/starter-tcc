import { GoalsScreen } from '@monetix/feature/finances';
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

const GoalsSummaryPage = () => {
  return (
    <GoalsScreen />
  )
}

export default GoalsSummaryPage;
