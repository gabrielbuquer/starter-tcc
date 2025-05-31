import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { ClassRoomType, api, getPaths } from '@monetix/shared/config';

import {
  ClassRoomCoursesDataResponse,
  ClassRoomStudentsDataResponse,
  CoursesQueryParams,
  StudentsQueryParams,
} from './types';

const API_PATHS = getPaths();

export const classRoomsFetcher = (token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<ClassRoomType[]>(API_PATHS.CLASS_ROOM_API, {
      headers,
    })
    .then((res) => res.data);
};

export const useClassRoom = () => {
  return useSWR<ClassRoomType[]>([API_PATHS.CLASS_ROOM_API], classRoomsFetcher);
};

export const classRoomCoursesFetcher = (
  classRoomId: string,
  page = 1,
  limit = 2,
  token?: string,
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<ClassRoomCoursesDataResponse>(
      `${API_PATHS.CLASS_ROOM_API}/${classRoomId}${API_PATHS.COURSES_API}`,
      {
        headers,
        params: {
          page,
          limit,
        },
      },
    )
    .then((res) => res.data);
};

export const useClassRoomCourses = ({
  classRoomId,
  page,
  limit,
  token,
}: CoursesQueryParams) => {
  return useSWR<ClassRoomCoursesDataResponse>(
    [API_PATHS.CLASS_ROOM_API, API_PATHS.COURSES_API, classRoomId, page, limit],
    () => classRoomCoursesFetcher(classRoomId, page, limit, token),
  );
};

export const classRoomCoursesPatch = (
  classRoomId: string,
  courseId: string,
  token?: string,
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .patch<ClassRoomCoursesDataResponse>(
      `${API_PATHS.CLASS_ROOM_API}/${classRoomId}${API_PATHS.COURSES_API}/${courseId}/enable`,
      null,
      {
        headers,
      },
    )
    .then((res) => res.data);
};

export const useClassRoomCourseEnable = () => {
  return useSWRMutation<
    ClassRoomCoursesDataResponse,
    unknown,
    [string, string],
    { classRoomId: string; courseId: string; token?: string }
  >(
    [API_PATHS.CLASS_ROOM_API, 'courses-enable'],
    (
      _key,
      {
        arg,
      }: { arg: { classRoomId: string; courseId: string; token?: string } },
    ) => classRoomCoursesPatch(arg.classRoomId, arg.courseId, arg.token),
  );
};

export const classRoomStudentsFetcher = (
  classRoomId: string,
  page = 1,
  limit = 2,
  token?: string,
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<ClassRoomStudentsDataResponse>(
      `${API_PATHS.CLASS_ROOM_API}/${classRoomId}${API_PATHS.STUDENTS_API}`,
      {
        headers,
        params: {
          page,
          limit,
        },
      },
    )
    .then((res) => res.data);
};

export const useClassRoomStudents = ({
  classRoomId,
  page,
  limit,
  token,
}: StudentsQueryParams) => {
  return useSWR<ClassRoomStudentsDataResponse>(
    [
      API_PATHS.CLASS_ROOM_API,
      API_PATHS.STUDENTS_API,
      classRoomId,
      page,
      limit,
    ],
    () => classRoomStudentsFetcher(classRoomId, page, limit, token),
  );
};
