import { LinearProgress, Typography } from '@mui/material';

import {
  GoalsResumeType,
  GoalsType,
  TransactionTypeEnum,
} from '@monetix/shared/config';
import { currencyFormatter } from '@monetix/core-utils';
import { Column } from '@monetix/shared/ui';

import { GoalsAction } from '../../components/GoalsAction';
import { valuesByTransactionType } from '../../utils';

export const columns: Column[] = [
  { id: 'expense', label: 'Despesas', minWidth: 170 },
  { id: 'goal', label: 'Meta', align: 'center', minWidth: 100 },
  {
    id: 'spent',
    label: 'Realizado',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'progress',
    label: 'Progresso',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'result',
    label: 'Resultado',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'actions',
    label: 'Ações',
    minWidth: 120,
    align: 'right',
  },
];

export const rows = (goals: GoalsType[], type: TransactionTypeEnum) => {
  return goals?.map((goal) => ({
    expense: goal?.category?.description ?? 'Categoria não definida',
    goal: currencyFormatter(goal?.planed ?? 0),
    spent: currencyFormatter(goal?.realized ?? 0),
    progress: (
      <LinearProgress
        variant="determinate"
        value={Number(Math.min(goal?.progress ?? 0, 100))}
      />
    ),
    result: (
      <Typography
        variant="h6"
        component="span"
        color={
          valuesByTransactionType(goal?.diff ?? 0, type) >= 0
            ? 'success'
            : 'error'
        }
      >
        {currencyFormatter(valuesByTransactionType(goal?.diff ?? 0, type))}
      </Typography>
    ),
    actions: <GoalsAction goal={goal} type={type} />,
  }));
};

export const totalizers = (
  resume: GoalsResumeType,
  type: TransactionTypeEnum,
) => [
  {
    label: 'Meta definida',
    value: resume?.goals ?? 0,
  },
  {
    label: 'Total projetado',
    value: valuesByTransactionType(resume?.actual ?? 0, type),
  },
  {
    label: 'Resultado',
    value: valuesByTransactionType(resume?.diff ?? 0, type),
  },
];
