import LinearProgress from '@mui/material/LinearProgress';
import Switch from '@mui/material/Switch';

import { CourseType } from '@monetix/shared/config';

import { CourseAction } from '../../components';

export const rows = (courses: CourseType[]) => {
  return courses?.map((course) => ({
    enabled: <Switch key={course.id} aria-label="Habilitado" defaultChecked />,
    name: course.name,
    'start-date': course.startDate || 'Sem data',
    'end-date': course.endDate || 'Sem data',
    progress: <LinearProgress variant="determinate" value={50} />,
    actions: <CourseAction {...course} />,
  }));
};
