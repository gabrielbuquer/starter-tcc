import useSWR from 'swr';

import { StudentType, api, getPaths } from '@monetix/shared/config';

const API_PATHS = getPaths();

export const studentFetcher = (studentId: string, token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return api
    .get<StudentType>(`${API_PATHS.STUDENT_API}/${studentId}`, {
      headers,
    })
    .then((res) => res.data);
};

export const useStudent = (studentId: string) => {
  if (!studentId) {
    return { data: null, error: null, isLoading: false };
  }
  return useSWR<StudentType>([API_PATHS.STUDENT_API, studentId], () =>
    studentFetcher(studentId),
  );
};
