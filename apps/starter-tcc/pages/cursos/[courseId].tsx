import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { ParsedUrlQuery } from 'querystring';

import {
  CourseContextProvider,
  CourseScreen,
  courseFetcher,
} from '@monetix/feature/courses';
import { getPaths } from '@monetix/shared/config';

import { authOptions } from '../api/auth/[...nextauth]';

interface IQuery extends ParsedUrlQuery {
  courseId: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const API_PATHS = getPaths();
  const session = await getServerSession(req, res, authOptions);
  try {
    const { courseId } = query as IQuery;
    const course = await courseFetcher(courseId, session?.user?.accessToken);

    return {
      props: {
        centeredContent: false,
        simpleHeader: false,
        hasContainer: true,
        hasMargin: true,
        courseId,
        fallback: {
          [`${API_PATHS.COURSE_API}/${courseId}`]: course,
        },
      },
    };
  } catch (err) {
    console.log('Error fetching course:', err);
    return {
      notFound: true,
    };
  }
};

const CoursePage = ({ courseId }: { courseId: string }) => {
  return (
    <CourseContextProvider courseId={courseId}>
      <CourseScreen />
    </CourseContextProvider>
  );
};

export default CoursePage;
