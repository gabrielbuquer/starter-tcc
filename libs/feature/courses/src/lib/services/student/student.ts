import useSWRMutation from 'swr/mutation';

import { api, getPaths } from '@monetix/shared/config';

const API_PATHS = getPaths();

const studentLessonApi = (studentId: string, lessonId: string) =>
  `${API_PATHS.STUDENT_API}/${studentId}${API_PATHS.LESSON_API}/${lessonId}`;

export const checkLesson = (studentId: string, lessonId: string) => {
  return api.patch(`${studentLessonApi(studentId, lessonId)}/check`);
};

export const useCheckLesson = (studentId: string, lessonId: string) => {
  return useSWRMutation(`${studentLessonApi(studentId, lessonId)}/check`, () =>
    checkLesson(studentId, lessonId),
  );
};

export const finishLesson = (studentId: string, lessonId: string) => {
  return api.patch(`${studentLessonApi(studentId, lessonId)}/finish`);
};

export const useFinishLesson = (studentId: string, lessonId: string) => {
  return useSWRMutation(`${studentLessonApi(studentId, lessonId)}/finish`, () =>
    finishLesson(studentId, lessonId),
  );
};
