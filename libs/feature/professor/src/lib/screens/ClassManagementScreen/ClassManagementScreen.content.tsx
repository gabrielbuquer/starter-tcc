import LinearProgress from '@mui/material/LinearProgress';

import { CourseType } from '@monetix/shared/config';
import { dateFormatter } from '@monetix/core-utils';

import { CourseAction, CourseSwitch } from '../../components';

export const rows = (courses: CourseType[]) => {
  return courses?.map((course) => ({
    enabled: <CourseSwitch {...course} />,
    name: course.name,
    'start-date': dateFormatter(course.startDate) || '-',
    'end-date': dateFormatter(course.endDate) || '-',
    progress: <LinearProgress variant="determinate" value={50} />,
    actions: <CourseAction {...course} />,
  }));
};
