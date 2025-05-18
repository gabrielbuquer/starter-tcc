import LinearProgress from '@mui/material/LinearProgress';

import { ClassRoomType } from '@monetix/shared/config';

import { StudentAction } from '../../components';

export const classRooms: ClassRoomType[] = [
  {
    id: '1',
    name: 'Ensino médio',
  },
  {
    id: '2',
    name: 'Ensino fundamental',
  },
];

export const rows = [
  {
    name: 'Fluxo de caixa',
    email: 'fluxo@monetix.com',
    birthDate: '10/10/2025',
    progress: <LinearProgress variant="determinate" value={50} />,
    actions: <StudentAction student={{ id: '1', name: 'Fluxo de caixa' }} />,
  },
];
