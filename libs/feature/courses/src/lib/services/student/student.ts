import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';

import { CourseType, api, getPaths } from '@monetix/shared/config';

const API_PATHS = getPaths();

export const studentCourseApi = (studentId: string, courseId: string) =>
  `${API_PATHS.STUDENT_API}/${studentId}${API_PATHS.COURSE_API}/${courseId}`;

export const studentCourserApi = (studentId: string, courserId: string) =>
  `${API_PATHS.STUDENT_API}/${studentId}${API_PATHS.COURSER_API}/${courserId}`;

const studentLessonApi = (studentId: string, lessonId: string) =>
  `${API_PATHS.STUDENT_API}/${studentId}${API_PATHS.LESSON_API}/${lessonId}`;

export const studentCourseFetcher = (
  studentId: string,
  courseId: string,
  token?: string,
) => {
  console.log(
    `Fetching course for student ${studentId} with course ID ${courseId}`,
  );
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<CourseType>(studentCourserApi(studentId, courseId), {
      headers,
    })
    .then((res) => res.data);
};

export const useStudentCourse = (studentId: string, courseId: string) => {
  return useSWR<CourseType>(studentCourserApi(studentId, courseId), () =>
    studentCourseFetcher(studentId, courseId),
  );
};

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

export const checkCourse = (studentId: string, courseId: string) => {
  return api.patch(`${studentCourseApi(studentId, courseId)}/check`);
};

export const useCheckCourse = (studentId: string, courseId: string) => {
  return useSWRMutation(`${studentCourseApi(studentId, courseId)}/check`, () =>
    checkCourse(studentId, courseId),
  );
};
