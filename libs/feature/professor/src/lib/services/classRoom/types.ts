import {
  BaseCourseType,
  ClassRoomType,
  CourseType,
  PaginationType,
  StudentType,
} from '@monetix/shared/config';

export type ClassRoomPost = Omit<ClassRoomType, 'id'>;

export type CoursesQueryParams = {
  classRoomId: string;
  page?: number;
  limit?: number;
  token?: string;
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

export type StudentsQueryParams = {
  classRoomId: string;
  page?: number;
  limit?: number;
  token?: string;
};
