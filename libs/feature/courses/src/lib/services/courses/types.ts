import {
  BaseCourseType,
  CourseType,
  PaginationType,
} from '@monetix/shared/config';

export type CoursesQueryParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type CoursePostData = BaseCourseType;

export type CoursesDataResponse = {
  data: CourseType[];
  pagination: PaginationType;
};
