import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { LessonType } from '@monetix/shared/config';

type ClassManagementContextProps = {
  lessons: LessonType[];
  selectedLesson: LessonType;
  currentStep: number;
  setSelectedLesson: (lessonId: number) => void;
};

export type ClassManagementContextPropsProviderProps = {
  children: ReactNode;
};

export const ClassManagementContext = createContext({} as ClassManagementContextProps);

const ClassManagementContextProvider = ({ children }: ClassManagementContextPropsProviderProps) => {
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
    <ClassManagementContext.Provider
      value={{
        lessons,
        selectedLesson,
        currentStep,
        setSelectedLesson: memoizedSetSelectedLesson,
      }}
    >
      {children}
    </ClassManagementContext.Provider>
  );
};

const useClassManagementContext = () => {
  return useContext(ClassManagementContext);
};

export { ClassManagementContextProvider, useClassManagementContext };
