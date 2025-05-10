import { ClassManagementScreen } from '@monetix/feature/professor';
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

const ClassManagementPage = () => {
  return (
    <ClassManagementScreen />
  )
}

export default ClassManagementPage;
