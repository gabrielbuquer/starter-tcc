import { CourseType } from '../course';

export type StudentType = {
  id: string;
  name: string;
  email: string;
  birthDate: boolean;
  courses: CourseType[];
};
