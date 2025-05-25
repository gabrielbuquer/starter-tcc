import { Switch } from '@mui/material';

import { CourseType } from '@monetix/shared/config';

export const CourseSwitch = (course: Partial<CourseType>) => {
  const handleEdit = (checked) => {
    console.log('checked', checked);
  };

  return (
    <>
      <Switch
        key={course.id}
        aria-label="Habilitado"
        onChange={(_, checked) => handleEdit(checked)}
        defaultChecked={course.enabled}
      />
    </>
  );
};
