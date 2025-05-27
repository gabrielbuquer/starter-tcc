import {
  BaseCourseType,
  CourseType,
  PaginationType,
  StudentType,
} from '@monetix/shared/config';

export type CoursesQueryParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type CoursePostData = BaseCourseType;

export type ClassRoomCoursesDataResponse = {
  items: CourseType[];
  meta: PaginationType;
};

export type ClassRoomStudentsDataResponse = {
  items: StudentType[];
  meta: PaginationType;
};
