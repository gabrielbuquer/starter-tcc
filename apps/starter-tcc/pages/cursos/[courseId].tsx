import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { ParsedUrlQuery } from 'querystring';

import {
  CourseContextProvider,
  CourseScreen,
  studentCourseFetcher,
  studentCourserApi,
} from '@monetix/feature/courses';

import { authOptions } from '../api/auth/[...nextauth]';

interface IQuery extends ParsedUrlQuery {
  courseId: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = await getServerSession(req, res, authOptions);

  try {
    const { courseId } = query as IQuery;

    const course = await studentCourseFetcher(
      session?.user?.id ?? '',
      courseId,
      session?.user?.accessToken,
    );

    return {
      props: {
        centeredContent: false,
        simpleHeader: false,
        hasContainer: true,
        hasMargin: true,
        courseId,
        fallback: {
          [studentCourserApi(session?.user?.id ?? '', courseId)]: course,
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
