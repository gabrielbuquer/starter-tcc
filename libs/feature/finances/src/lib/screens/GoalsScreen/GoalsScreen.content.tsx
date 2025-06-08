import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { GoalsResumeType, GoalsType } from '@monetix/shared/config';
import { currencyFormatter, dateFormatter } from '@monetix/core-utils';

import { TransactionAction } from '../../components/TransactionAction';

export const columns: any[] = [
  { id: 'expense', label: 'Despesas', minWidth: 170 },
  { id: 'goal', label: 'Meta', minWidth: 100 },
  {
    id: 'spended',
    label: 'Realizado',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'remained',
    label: 'A realizar',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'result',
    label: 'Excendente',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

export const rows = (goals: GoalsType[]) => {
  return goals?.map((goal) => ({
    expense: goal?.category?.description ?? 'Categoria não definida',
    goal: goal?.planed ?? 0,
    spended: goal?.realized ?? 0,
    remained: goal?.progress ?? 0,
    result: goal?.diff ?? 0,
  }));
};

export const totalizers = (resume: GoalsResumeType) => [
  {
    label: 'Meta definida',
    value: resume?.goals ?? 0,
  },
  {
    label: 'Total projetado',
    value: resume?.actual ?? 0,
  },
  {
    label: 'Diferença',
    value: resume?.diff ?? 0,
  },
];
