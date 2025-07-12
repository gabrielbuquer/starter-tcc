import { isProdEnv } from '@monetix/core-utils';

import { withBasePath } from '../utils/basePath';

import * as PATHS from './constants';
import { SharedCorePathsType } from './types';

const PATHS_CONFIG = {
  AUTH_API: PATHS.AUTH_API_PATH,
  FINANCES_API: PATHS.FINANCES_API_PATH,
  GOALS_API: PATHS.GOALS_API_PATH,
  USER_API: PATHS.USER_API_PATH,
  COURSE_API: PATHS.COURSE_API_PATH,
  COURSES_API: PATHS.COURSES_API_PATH,
  COURSER_API: PATHS.COURSER_API_PATH,
  STUDENT_API: PATHS.STUDENT_API_PATH,
  STUDENTS_API: PATHS.STUDENTS_API_PATH,
  CLASS_ROOM_API: PATHS.CLASS_ROOM_API_PATH,
  LESSON_API: PATHS.LESSON_API_PATH,
  NEXT_AUTH_API: PATHS.NEXT_AUTH_API,
  PUBLIC_ROOT: PATHS.PUBLIC_PATH,
  PUBLIC_ASSETS_PATH: PATHS.PUBLIC_ASSETS_PATH,
  PUBLIC_ASSETS_IMAGES_PATH: PATHS.PUBLIC_IMAGES_PATH,
};

export const getBasePaths = (): SharedCorePathsType => {
  if (isProdEnv) {
    const entries = Object.entries(PATHS_CONFIG).map(([key, value]) => [
      key,
      withBasePath(value),
    ]);
    return Object.fromEntries(entries) as SharedCorePathsType;
  }
  return PATHS_CONFIG;
};

export const getPaths = (): SharedCorePathsType => PATHS_CONFIG;
