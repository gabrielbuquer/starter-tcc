import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';

import {
  ClassManagementContextProvider,
  ClassManagementScreen,
  classRoomsFetcher,
} from '@monetix/feature/professor';
import { getPaths } from '@monetix/shared/config';

import { authOptions } from '../../api/auth/[...nextauth]';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_PATHS = getPaths();
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log('Session:', session?.user?.accessToken);

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
    console.log('Error fetching class rooms:', err);
    return {
      notFound: true,
    };
  }
};

const ClassManagementPage = () => {
  return (
    <ClassManagementContextProvider>
      <ClassManagementScreen />
    </ClassManagementContextProvider>
  );
};

export default ClassManagementPage;
