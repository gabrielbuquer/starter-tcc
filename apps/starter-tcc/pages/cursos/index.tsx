import { ListCoursesScreen } from '@monetix/feature/courses';
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

const ListCoursesPage = () => {
  return (
    <ListCoursesScreen />
  )
}

export default ListCoursesPage;
