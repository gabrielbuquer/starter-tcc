import LinearProgress from '@mui/material/LinearProgress';
import { Checkbox } from '@mui/material';

import { CourseType } from '@monetix/shared/config';
import { SimpleTable } from '@monetix/shared/ui';

import { LESSON_COLUMNS } from './constants';

export const rows = (courses: CourseType[]) => {
  return courses?.map((course) => ({
    id: course.id,
    name: course.name,
    startDate: course.startDate || 'Sem data',
    endDate: course.endDate || 'Sem data',
    progress: (
      <LinearProgress variant="determinate" value={course.progress || 0} />
    ),
    collapse: (
      <SimpleTable
        columns={LESSON_COLUMNS}
        rows={course.lessons?.map((lesson) => ({
          id: lesson.id,
          name: lesson.name,
          startDate: lesson.startDate || 'Sem data',
          endDate: lesson.endDate || 'Sem data',
          progress: <Checkbox defaultChecked={lesson.done || false} disabled />,
        }))}
      />
    ),
  }));
};
