import { Switch } from '@mui/material';
import { useState } from 'react';

import { CourseType } from '@monetix/shared/config';

import { useClassRoomCourseEnable } from '../../services';
import { useClassManagement } from '../../contexts';

export const CourseSwitch = (course: Partial<CourseType>) => {
  const { selectedClassRoom } = useClassManagement();
  const { trigger } = useClassRoomCourseEnable();
  const [enabled, setEnabled] = useState(course.enabled ?? false);

  const handleEdit = (checked) => {
    if (checked) {
      setEnabled(true);
      trigger({
        classRoomId: selectedClassRoom,
        courseId: course.id,
      });
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
