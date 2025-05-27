import LinearProgress from '@mui/material/LinearProgress';

import { StudentType } from '@monetix/shared/config';

import { StudentAction } from '../../components';

export const rows = (students: StudentType[]) => {
  return students?.map((student) => ({
    name: student.name,
    email: student.email,
    birthDate: student['date-of_birth'],
    progress: <LinearProgress variant="determinate" value={50} />,
    actions: <StudentAction student={student} />,
  }));
};
