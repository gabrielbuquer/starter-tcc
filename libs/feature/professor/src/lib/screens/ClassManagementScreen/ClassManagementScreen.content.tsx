import LinearProgress from '@mui/material/LinearProgress';

import { CourseType } from '@monetix/shared/config';

import { CourseAction, CourseSwitch } from '../../components';

export const rows = (courses: CourseType[]) => {
  return courses?.map((course) => ({
    enabled: <CourseSwitch {...course} />,
    name: course.name,
    'start-date': course.startDate || 'Sem data',
    'end-date': course.endDate || 'Sem data',
    progress: <LinearProgress variant="determinate" value={50} />,
    actions: <CourseAction {...course} />,
  }));
};
