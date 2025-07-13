import { CourseType } from '@monetix/shared/config';
import { dateFormatter } from '@monetix/core-utils';

import { CourseAction, CourseSwitch } from '../../components';

export const rows = (courses: CourseType[]) => {
  return courses?.map((course) => ({
    enabled: <CourseSwitch {...course} />,
    name: course.name,
    'start-date': dateFormatter(course.startDate) || '-',
    'end-date': dateFormatter(course.endDate) || '-',
    actions: <CourseAction {...course} />,
  }));
};
