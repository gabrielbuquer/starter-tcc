export type CourseType = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  startDate: string;
  endDate: string;
  progress: number;
  lessons: LessonType[];
  teacher: TeacherType;
};

export type BaseCourseType = Pick<CourseType, 'id' | 'name' | 'description'> & {
  lessons: BaseLessonType[];
};

export type TeacherType = {
  id: string;
  name: string;
  email: string;
};

export type LessonType = {
  name: string;
  type: 'pdf' | 'video' | 'form';
  url: string;
  id: string;
  startDate: string;
  endDate: string;
  done: boolean;
};

export type BaseLessonType = Omit<LessonType, 'done' | 'startDate' | 'endDate'>;

export type CourseListType = Omit<CourseType, 'lessons'>[];
