import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import {
  StudentManagementContextProvider,
  StudentManagementScreen,
  classRoomsFetcher,
} from '@monetix/feature/professor';
import { getPaths } from '@monetix/shared/config';

import { authOptions } from '../../api/auth/[...nextauth]';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_PATHS = getPaths();
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log('Session:', session);

  try {
    const classRooms = await classRoomsFetcher(session?.user?.accessToken);
    return {
      props: {
        centeredContent: false,
        simpleHeader: false,
        hasContainer: true,
        hasMargin: true,
        fallback: {
          [API_PATHS.CLASS_ROOM_API]: classRooms,
        },
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const StudentManagementPage = () => {
  return (
    <StudentManagementContextProvider>
      <StudentManagementScreen />
    </StudentManagementContextProvider>
  );
};

export default StudentManagementPage;
