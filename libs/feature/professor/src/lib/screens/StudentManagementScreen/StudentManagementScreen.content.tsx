import { StudentType } from '@monetix/shared/config';
import { dateFormatter } from '@monetix/core-utils';

import { StudentAction } from '../../components';

export const rows = (students: StudentType[]) => {
  return students?.map((student) => ({
    name: student.name,
    email: student.email,
    birthDate: dateFormatter(student.birthDate) || '-',
    actions: <StudentAction student={student} />,
  }));
};
