import { Switch } from '@mui/material';
import { useState } from 'react';

import { CourseType } from '@monetix/shared/config';
import { showSnackBar } from '@monetix/shared/ui';

import { useClassRoomCourseEnable } from '../../services';
import { useClassManagement } from '../../contexts';

export const CourseSwitch = (course: Partial<CourseType>) => {
  const { selectedClassRoom } = useClassManagement();
  const { trigger } = useClassRoomCourseEnable();
  const [enabled, setEnabled] = useState(course.enabled ?? false);

  const handleEdit = (checked) => {
    if (checked) {
      setEnabled(true);
      try {
        trigger({
          classRoomId: selectedClassRoom,
          courseId: course.id,
        });
        showSnackBar({
          message: `Curso ${course.name} habilitado com sucesso!`,
          type: 'success',
        });
      } catch (error) {
        setEnabled(false);
        console.error('Error enabling course:', error);
        showSnackBar({
          message: `Erro ao habilitar curso ${course.name}.`,
          type: 'error',
        });
      }
    }
  };

  return (
    <Switch
      key={course.id}
      aria-label={`Curso ${course.name} ${course.enabled ? 'habilitado' : 'desabilitado'}`}
      onChange={(_, checked) => handleEdit(checked)}
      defaultChecked={course.enabled}
      disabled={enabled}
    />
  );
};
