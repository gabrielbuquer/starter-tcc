import { LessonType } from '@monetix/shared/config';

export const MOCK_LESSONS: LessonType[] = [
  {
    name: 'Introduction to TypeScript',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=W3BJZgYaYwY',
    id: 'lesson-1',
    startDate: '2023-01-01',
    endDate: '2023-01-02',
    done: true,
  },
  {
    name: 'Advanced React Patterns',
    type: 'pdf',
    url: 'https://pdfobject.com/pdf/sample.pdf',
    id: 'lesson-2',
    startDate: '2023-02-01',
    endDate: '2023-02-02',
    done: false,
  },
  {
    name: 'Final test',
    type: 'form',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfO9tyw6eKy1df-6TYJje5fdeJ4lzEp6hEUOISOBYl8nesNHA/viewform?usp=header',
    id: 'lesson-3',
    startDate: '2023-02-01',
    endDate: '2023-02-02',
    done: false,
  },
];
