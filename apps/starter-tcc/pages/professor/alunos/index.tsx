import { GetServerSideProps } from 'next';

import { StudentManagementScreen } from '@monetix/feature/professor';

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

const StudentManagementPage = () => {
  return <StudentManagementScreen />;
};

export default StudentManagementPage;
