import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { NextSeo } from 'next-seo';

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
          [API_PATHS.COURSE_API]: courses,
        },
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

const ListCoursesPage = () => {
  return (
    <>
      <NextSeo title="Nossos Cursos" />
      <ListCoursesScreen />
    </>
  );
};

export default ListCoursesPage;
