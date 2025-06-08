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
  isCourseFinished: boolean;
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

  const { trigger: checkLesson, isMutating: isCheckingLesson } = useCheckLesson(
    session?.user?.id ?? '',
    selectedLesson?.id ?? '',
  );

  useEffect(() => {
    if (lessons && lessons.length > 0 && currentStep === 0) {
      const firstPendingIndex = lessons.findIndex((lesson) => !lesson.endDate);
      const defaultStep =
        firstPendingIndex !== -1 ? firstPendingIndex : lessons.length - 1;

      setCurrentStep(defaultStep);
    }
  }, [lessons]);

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

  const isCourseFinished = useMemo(
    () => lessons?.every((lesson) => lesson.endDate) ?? false,
    [lessons],
  );

  const handleConfirmedCheckLesson = useCallback(async () => {
    await checkLesson();
    await updateCourse();
    setConfirmationDialogOpen(false);
  }, [checkLesson, updateCourse]);

  return (
    <CourseContext.Provider
      value={{
        lessons,
        selectedLesson,
        isLoading,
        currentStep,
        isLastStep,
        isCourseFinished,
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
        isLoading={isCheckingLesson}
        cancelButtonText="Ainda não"
        successButtonText="Iniciar lição"
        handleSuccess={handleConfirmedCheckLesson}
        handleCancel={() => setConfirmationDialogOpen(false)}
      />
    </CourseContext.Provider>
  );
};

const useCourseContext = () => {
  return useContext(CourseContext);
};

export { CourseContextProvider, useCourseContext };
