import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@mui/material';

import { ConfirmationDialog } from '@monetix/shared/ui';

import { useCourseContext } from '../../contexts/CourseContext';
import { useFinishLesson } from '../../services/student';

export const ButtonFinish = () => {
  const { data: session } = useSession();
  const [finishConfirmation, setFinishConfirmation] = useState(false);

  const {
    selectedLesson,
    currentStep,
    isLastStep,
    isCourseFinished,
    setSelectedLesson,
    updateCourse,
  } = useCourseContext();

  const { trigger: finishLesson, isMutating: isLoading } = useFinishLesson(
    session?.user?.id ?? '',
    selectedLesson?.id ?? '',
  );

  const handleOpenDialog = useCallback(() => {
    setFinishConfirmation(true);
  }, []);

  const handleConfirmFinish = useCallback(async () => {
    await finishLesson();
    await updateCourse();
    setFinishConfirmation(false);

    if (!isLastStep) {
      setSelectedLesson(currentStep + 1);
    }
  }, [finishLesson, updateCourse, isLastStep, setSelectedLesson]);

  return (
    <>
      {selectedLesson?.startDate && !selectedLesson?.endDate && (
        <Button
          variant="contained"
          onClick={handleOpenDialog}
          disabled={isLoading}
        >
          Finalizar lição
        </Button>
      )}

      {isCourseFinished && (
        <Button variant="contained" disabled>
          Curso finalizado
        </Button>
      )}

      <ConfirmationDialog
        title="Finalizar lição"
        text={`Deseja finalizar a lição "${selectedLesson?.name}"?`}
        open={finishConfirmation}
        isLoading={isLoading}
        cancelButtonText="Cancelar"
        successButtonText="Finalizar"
        handleSuccess={handleConfirmFinish}
        handleCancel={() => setFinishConfirmation(false)}
      />
    </>
  );
};
