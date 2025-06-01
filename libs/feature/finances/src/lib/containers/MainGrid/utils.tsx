import {
  AddCircle,
  Insights,
  RemoveCircle,
  Savings,
} from '@mui/icons-material';

import { currencyFormatter } from '@monetix/core-utils';

import { MainGridProps } from './MainGrid';

export const content = ({
  amount,
  totalExpense,
  totalIncome,
}: MainGridProps) => [
  {
    title: 'Meu balanço',
    content: currencyFormatter(amount || 0),
    icon: <Savings />,
  },
  {
    title: 'Receita do mês',
    content: currencyFormatter(totalIncome || 0),
    icon: <AddCircle />,
  },
  {
    title: 'Despesas do mês',
    content: currencyFormatter(totalExpense || 0),
    icon: <RemoveCircle />,
  },
  {
    title: 'Ver relatórios',
    icon: <Insights />,
  },
];
