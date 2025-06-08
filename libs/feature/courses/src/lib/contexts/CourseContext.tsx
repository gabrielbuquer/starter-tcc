import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSession } from 'next-auth/react';
import { mutate } from 'swr';

import { LessonType } from '@monetix/shared/config';
import { ConfirmationDialog } from '@monetix/shared/ui';

import { useCheckLesson, useStudentCourse } from '../services';

type CourseContextProps = {
  lessons: LessonType[];
  selectedLesson: LessonType;
  currentStep: number;
  isLoading: boolean;
  isLastStep: boolean;
  setSelectedLesson: (index: number) => void;
  setConfirmationDialogOpen: (open: boolean) => void;
  updateCourse: () => ReturnType<typeof mutate>;
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
  const { data: session } = useSession();
  const {
    data: course,
    isLoading,
    mutate: updateCourse,
  } = useStudentCourse(session?.user?.id ?? '', courseId);

  const lessons = useMemo(() => course?.lessons, [course]);

  const [currentStep, setCurrentStep] = useState<number>(0);

  const [confirmationDialogOpen, setConfirmationDialogOpen] =
    useState<boolean>(false);
  const isLastStep = useMemo(
    () => currentStep === (lessons?.length ?? 0) - 1,
    [currentStep, lessons],
  );

  const memoizedSetSelectedLesson = useCallback(
    (lessonStep: number) => {
      const stepToUpdate =
        lessonStep < 0
          ? 0
          : lessonStep >= (lessons?.length ?? 0)
            ? (lessons?.length ?? 1) - 1
            : lessonStep;
      setCurrentStep(stepToUpdate);
    },
    [lessons],
  );

  const selectedLesson = useMemo(
    () => lessons?.[currentStep] ?? null,
    [lessons, currentStep],
  );

  const { trigger: checkLesson } = useCheckLesson(
    session?.user?.id ?? '',
    selectedLesson?.id ?? '',
  );

  useEffect(() => {
    if (lessons && lessons.length > 0 && !selectedLesson) {
      const firstPendingIndex = lessons.findIndex((lesson) => !lesson.endDate);

      if (firstPendingIndex !== -1) {
        setCurrentStep(firstPendingIndex);
      } else {
        setCurrentStep(lessons.length - 1);
      }
    }
  }, [lessons, selectedLesson]);

  useEffect(() => {
    const startLesson = async () => {
      if (selectedLesson && !selectedLesson.startDate) {
        const previousLessons = lessons.slice(0, currentStep);
        const hasPreviousLessonPending = previousLessons.some(
          (lesson) => !lesson.endDate,
        );

        if (hasPreviousLessonPending) {
          setConfirmationDialogOpen(true);
        } else {
          await checkLesson();
          await updateCourse();
        }
      }
    };

    startLesson();
  }, [selectedLesson]);

  console.log(lessons, selectedLesson, 'lessons changed');

  return (
    <CourseContext.Provider
      value={{
        lessons,
        selectedLesson,
        isLoading,
        currentStep,
        isLastStep,
        setSelectedLesson: memoizedSetSelectedLesson,
        setConfirmationDialogOpen,
        updateCourse,
      }}
    >
      {children}
      <ConfirmationDialog
        title="Iniciar lição"
        text={`Deseja iniciar a lição ${selectedLesson?.name}? Você ainda tem uma lição anterior pendente.`}
        open={confirmationDialogOpen}
        isLoading={isLoading}
        cancelButtonText="Ainda não"
        successButtonText="Iniciar lição"
        handleSuccess={() => console.log('Lição iniciada')}
        handleCancel={() => setConfirmationDialogOpen(false)}
      />
    </CourseContext.Provider>
  );
};

const useCourseContext = () => {
  return useContext(CourseContext);
};

export { CourseContextProvider, useCourseContext };
