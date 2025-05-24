import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { ClassRoomType, api, getPaths } from '@monetix/shared/config';

import { ClassRoomCoursesDataResponse } from './types';

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
  token?: string,
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<ClassRoomCoursesDataResponse>(
      `${API_PATHS.CLASS_ROOM_API}/${classRoomId}${API_PATHS.COURSE_API}`,
      {
        headers,
      },
    )
    .then((res) => res.data);
};

export const useClassRoomCourses = () => {
  return useSWRMutation<
    ClassRoomCoursesDataResponse,
    unknown,
    [string, string],
    { classRoomId: string; token?: string }
  >(
    [API_PATHS.CLASS_ROOM_API, 'courses'],
    (_key, { arg }: { arg: { classRoomId: string; token?: string } }) =>
      classRoomCoursesFetcher(arg.classRoomId, arg.token),
  );
};
