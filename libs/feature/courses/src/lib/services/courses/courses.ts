import useSWR from 'swr';

import { CourseType, api, getPaths } from '@monetix/shared/config';

const API_PATHS = getPaths();

export const courseListFetcher = (token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<CourseType[]>(API_PATHS.COURSE_API, {
      headers,
    })
    .then((res) => res.data);
};

export const useCourseList = () => {
  return useSWR<CourseType[]>(API_PATHS.COURSE_API, courseListFetcher);
};

export const courseFetcher = (id: string, token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<CourseType>(`${API_PATHS.COURSE_API}/${id}`, {
      headers,
    })
    .then((res) => res.data);
};

export const useCourse = (id: string) => {
  return useSWR<CourseType>(`${API_PATHS.COURSE_API}/${id}`, () =>
    courseFetcher(id),
  );
};
