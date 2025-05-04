import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { LessonType } from '@monetix/shared/config';

import { MOCK_LESSONS } from '../components/StepList/StepList.mock';

type CourseContextProps = {
  selectedLesson?: LessonType;
  setSelectedLesson: (lessonId: LessonType['id']) => void;
};

export type CourseContextPropsProviderProps = {
  children: ReactNode;
};

export const CourseContext = createContext({} as CourseContextProps);

const CourseContextProvider = ({ children }: CourseContextPropsProviderProps) => {
  const [selectedLesson, setSelectedLesson] = useState<LessonType>(MOCK_LESSONS[0]);

  const memoizedSetSelectedLesson = useCallback((lessonId: LessonType['id']) => {
    const lesson = MOCK_LESSONS.find((lesson) => lesson.id === lessonId);
    console.log('lesson', lesson, lessonId);
    setSelectedLesson(lesson);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        selectedLesson,
        setSelectedLesson: memoizedSetSelectedLesson,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

const useCourseContext = () => {
  return useContext(CourseContext);
};

export { CourseContextProvider, useCourseContext };
