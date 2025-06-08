export type SharedPathsKeyType =
  | 'FINANCES_API'
  | 'GOALS_API'
  | 'USER_API'
  | 'COURSE_API'
  | 'COURSES_API'
  | 'STUDENT_API'
  | 'STUDENTS_API'
  | 'CLASS_ROOM_API';

type PublicPathsType = {
  PUBLIC: {
    ROOT: string;
    ASSETS: {
      ROOT: string;
      IMAGES: string;
    };
  };
};

export type SharedPathsType = Record<SharedPathsKeyType, string> &
  PublicPathsType;

export type SharedCorePathsType = SharedPathsType;
