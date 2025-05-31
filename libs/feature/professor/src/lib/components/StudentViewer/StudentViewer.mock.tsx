import { Checkbox, LinearProgress } from '@mui/material';

import { SimpleTable } from '@monetix/shared/ui';

import { LESSON_COLUMNS } from './constants';

interface TableCourseType {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  progress: JSX.Element;
  collapse: JSX.Element;
}

export const MOCK_COURSES: TableCourseType[] = [
  {
    id: 'lesson-1',
    name: 'Introduction to TypeScript',
    startDate: '2023-01-01',
    endDate: '2023-01-02',
    progress: <LinearProgress variant="determinate" value={50} />,
    collapse: (
      <SimpleTable
        columns={LESSON_COLUMNS}
        rows={[
          {
            id: 'lesson-1',
            name: 'Introduction to TypeScript 2',
            startDate: '2023-01-01',
            endDate: '2023-01-02',
            progress: <Checkbox defaultChecked />,
          },
          {
            id: 'lesson-2',
            name: 'Introduction to TypeScript 3',
            startDate: '2023-01-01',
            endDate: '2023-01-02',
            progress: <Checkbox defaultChecked />,
          },
        ]}
      />
    ),
  },
];
