import useSWRMutation from 'swr/mutation';

import { api, getPaths } from '@monetix/shared/config';

import { CoursePostData } from './types';

const API_PATHS = getPaths();

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
