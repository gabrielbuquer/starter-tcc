import { GetServerSideProps } from 'next';

import { ClassManagementScreen } from '@monetix/feature/professor';

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

const ClassManagementPage = () => {
  return <ClassManagementScreen />;
};

export default ClassManagementPage;
