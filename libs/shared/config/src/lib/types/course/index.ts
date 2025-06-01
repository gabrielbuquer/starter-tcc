export type CourseType = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  startDate: string;
  endDate: string;
  progress: number;
  lessons: LessonType[];
};

export type BaseCourseType = Pick<CourseType, 'id' | 'name' | 'description'> & {
  lessons: BaseLessonType[];
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
