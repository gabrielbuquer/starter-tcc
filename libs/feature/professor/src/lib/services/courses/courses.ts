import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { api, getPaths } from '@monetix/shared/config';

import { CoursePostData } from './types';

const API_PATHS = getPaths();

export const courseDataFetcher = (courseId: string) => {
  return api.get(`${API_PATHS.COURSE_API}/${courseId}`).then((res) => {
    return res.data;
  });
};

export const useCourse = (courseId) => {
  return useSWR(courseId ? [API_PATHS.COURSE_API, courseId] : null, () =>
    courseDataFetcher(courseId),
  );
};

export const courseDataPost = (data: CoursePostData) => {
  return api.post(API_PATHS.COURSE_API, data).then((res) => {
    return res.data;
  });
};

export const usePostCourse = () => {
  return useSWRMutation(
    [API_PATHS.COURSE_API, 'post'],
    (_key, { arg }: { arg: CoursePostData }) => courseDataPost(arg),
  );
};

export const courseDataPut = (data: CoursePostData) => {
  return api.put(`${API_PATHS.COURSE_API}/${data.id}`, data).then((res) => {
    return res.data;
  });
};

export const usePutCourse = () => {
  return useSWRMutation(
    [API_PATHS.COURSE_API, 'put'],
    (_key, { arg }: { arg: CoursePostData }) => courseDataPut(arg),
  );
};
