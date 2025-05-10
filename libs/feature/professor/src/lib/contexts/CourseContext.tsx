import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { LessonType } from '@monetix/shared/config';

type CourseContextProps = {
  lessons: LessonType[];
  selectedLesson: LessonType;
  currentStep: number;
  setSelectedLesson: (lessonId: number) => void;
};

export type CourseContextPropsProviderProps = {
  children: ReactNode;
};

export const CourseContext = createContext({} as CourseContextProps);

const CourseContextProvider = ({ children }: CourseContextPropsProviderProps) => {
  const lessons = [];
  const [selectedLesson, setSelectedLesson] = useState<LessonType>(lessons[0]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const memoizedSetSelectedLesson = useCallback((lessonStep: number) => {
    const stepToUpdate = lessonStep < 0 ? 0 : lessonStep >= lessons.length ? lessons.length - 1 : lessonStep;
    const lesson = lessons[stepToUpdate];
    setSelectedLesson(lesson);
    setCurrentStep(stepToUpdate);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        lessons,
        selectedLesson,
        currentStep,
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
