import LinearProgress from '@mui/material/LinearProgress';
import { Checkbox, Tooltip } from '@mui/material';

import { CourseType } from '@monetix/shared/config';
import { SimpleTable } from '@monetix/shared/ui';

import { LESSON_COLUMNS } from './constants';

export const rows = (courses: CourseType[]) => {
  return courses?.map((course) => ({
    id: course.id,
    name: course.name,
    startDate: course.startDate || '-',
    endDate: course.endDate || '-',
    progress: (
      <Tooltip
        title={
          course.progress > 0
            ? `${course.progress}% concluído`
            : 'Progresso do curso'
        }
      >
        <LinearProgress variant="determinate" value={course.progress || 0} />
      </Tooltip>
    ),
    collapse: (
      <SimpleTable
        columns={LESSON_COLUMNS}
        rows={course.lessons?.map((lesson) => ({
          id: lesson.id,
          name: lesson.name,
          startDate: lesson.startDate || '-',
          endDate: lesson.endDate || '-',
          progress: (
            <Tooltip
              title={lesson.endDate ? `Lição concluída` : 'Lição pendente'}
            >
              <div>
                <Checkbox defaultChecked={!!lesson.endDate || false} disabled />
              </div>
            </Tooltip>
          ),
        }))}
      />
    ),
  }));
};
