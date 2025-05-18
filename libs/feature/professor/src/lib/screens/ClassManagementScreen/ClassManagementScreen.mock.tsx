import LinearProgress from "@mui/material/LinearProgress";
import Switch from "@mui/material/Switch";
import { CourseAction } from "../../components";
import { ClassRoomType } from "@monetix/shared/config";

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
    enabled: <Switch key={'Alm'} aria-label="Habilitado" defaultChecked />,
    name: 'Fluxo de caixa',
    'start-date': '10/10/2025',
    'end-date': '16/10/2025',
    progress: <LinearProgress variant="determinate" value={50} />,
    actions: <CourseAction />
  }
];

export const totalizers = [
  {
    label: 'Meta definida',
    value: 1000,
  },
  {
    label: 'Total projetado',
    value: -1200,
  },
  {
    label: 'Diferença',
    value: -200,
  }
]
