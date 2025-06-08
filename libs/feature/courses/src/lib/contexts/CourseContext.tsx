import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LessonType } from '@monetix/shared/config';

import { useCourse } from '../services';

type CourseContextProps = {
  lessons: LessonType[];
  selectedLesson: LessonType;
  currentStep: number;
  isLoading: boolean;
  setSelectedLesson: (lessonId: number) => void;
};

export type CourseContextPropsProviderProps = {
  children: ReactNode;
  courseId: string;
};

export const CourseContext = createContext({} as CourseContextProps);

const CourseContextProvider = ({
  children,
  courseId,
}: CourseContextPropsProviderProps) => {
  const { data: course, isLoading } = useCourse(courseId);
  const lessons = useMemo(() => course?.lessons, [course]);
  const [selectedLesson, setSelectedLesson] = useState<LessonType | null>();
  const [currentStep, setCurrentStep] = useState<number>(0);

  console.log(course);

  const memoizedSetSelectedLesson = useCallback(
    (lessonStep: number) => {
      const stepToUpdate =
        lessonStep < 0
          ? 0
          : lessonStep >= lessons.length
            ? lessons.length - 1
            : lessonStep;
      const lesson = lessons[stepToUpdate];
      setSelectedLesson(lesson);
      setCurrentStep(stepToUpdate);
    },
    [course],
  );

  useEffect(() => {
    if (lessons && lessons.length > 0) {
      setSelectedLesson(lessons[0]);
      setCurrentStep(0);
    }
  }, [lessons]);

  return (
    <CourseContext.Provider
      value={{
        lessons,
        selectedLesson,
        isLoading,
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
