import { LessonType } from "@monetix/shared/config";

export const MOCK_LESSONS: LessonType[] = [
  {
    name: "Introduction to TypeScript",
    type: "video",
    url: "https://www.youtube.com/watch?v=W3BJZgYaYwY",
    id: "lesson-1",
    "start-date": "2023-01-01",
    "end-date": "2023-01-02",
    done: true,
  },
  {
    name: "Advanced React Patterns",
    type: "article",
    url: "https://example.com/lesson2",
    id: "lesson-2",
    "start-date": "2023-02-01",
    "end-date": "2023-02-02",
    done: false,
  },
];
