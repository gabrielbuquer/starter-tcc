import { GetServerSideProps } from 'next';

import { ListCoursesScreen } from '@monetix/feature/courses';

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

const ListCoursesPage = () => {
  return <ListCoursesScreen />;
};

export default ListCoursesPage;
