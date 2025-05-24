import { GetServerSideProps } from 'next';

import { CourseScreen } from '@monetix/feature/courses';

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
  return <CourseScreen />;
};

export default ListCoursesPage;
