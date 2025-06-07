import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';

import { ListCoursesScreen, courseListFetcher } from '@monetix/feature/courses';
import { getPaths } from '@monetix/shared/config';

import { authOptions } from '../api/auth/[...nextauth]';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_PATHS = getPaths();
  const session = await getServerSession(context.req, context.res, authOptions);
  try {
    const courses = await courseListFetcher(session?.user?.accessToken);
    return {
      props: {
        centeredContent: false,
        simpleHeader: false,
        hasContainer: true,
        hasMargin: true,
        fallback: {
          [(API_PATHS.COURSE_API, 'list')]: courses,
        },
      },
    };
  } catch (err) {
    console.log('Error fetching courses:', err);
    return {
      notFound: true,
    };
  }
};

const ListCoursesPage = () => {
  return <ListCoursesScreen />;
};

export default ListCoursesPage;
