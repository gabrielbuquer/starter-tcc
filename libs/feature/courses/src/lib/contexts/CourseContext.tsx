import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { LessonType } from '@monetix/shared/config';

type CourseContextProps = {
  selectedLesson?: LessonType;
  setSelectedLesson: (lesson: LessonType) => void;
};

export type CourseContextPropsProviderProps = {
  children: ReactNode;
};

export const CourseContext = createContext({} as CourseContextProps);

const CourseContextProvider = ({ children }: CourseContextPropsProviderProps) => {
  const [selectedLesson, setSelectedLesson] = useState<LessonType>();

  const memoizedSetSelectedLesson = useCallback((size: LessonType) => {
    setSelectedLesson(size);
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
