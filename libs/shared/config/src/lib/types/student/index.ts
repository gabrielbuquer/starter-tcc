export type CourseType = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  'start-date': string;
  'end-date': string;
  progress: number;
  lessons: LessonType[];
};

export type BaseCourseType = Pick<CourseType, 'name' | 'description'> & {
  lessons: BaseLessonType[];
};

export type LessonType = {
  name: string;
  type: 'pdf' | 'video' | 'form';
  url: string;
  id: string;
  'start-date': string;
  'end-date': string;
  done: boolean;
};

export type BaseLessonType = Omit<
  LessonType,
  'done' | 'start-date' | 'end-date'
>;
