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

export type LessonType = {
  name: string;
  type: string;
  url: string;
  id: string;
  'start-date': string;
  'end-date': string;
  done: boolean;
};
