import { AddCircle, RemoveCircle, Savings } from '@mui/icons-material';

import { currencyFormatter } from '@monetix/core-utils';
import { TransactionResumeType } from '@monetix/shared/config';

export const content = ({
  amount,
  totalExpense,
  totalIncome,
}: TransactionResumeType) => [
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
];
