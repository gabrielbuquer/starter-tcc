export type SharedPathsKeyType =
  | 'AUTH_API'
  | 'NEXT_AUTH_API'
  | 'FINANCES_API'
  | 'GOALS_API'
  | 'USER_API'
  | 'COURSE_API'
  | 'COURSES_API'
  | 'COURSER_API'
  | 'STUDENT_API'
  | 'STUDENTS_API'
  | 'CLASS_ROOM_API'
  | 'LESSON_API'
  | 'PUBLIC_ROOT'
  | 'PUBLIC_ASSETS_PATH'
  | 'PUBLIC_ASSETS_IMAGES_PATH';

export type SharedPathsType = Record<SharedPathsKeyType, string>;

export type SharedCorePathsType = SharedPathsType;
