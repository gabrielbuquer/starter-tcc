import { AddCircle, RemoveCircle, Savings } from '@mui/icons-material';

import { currencyFormatter } from '@monetix/core-utils';

import { MainGridResume } from './types';

export const content = ({
  amount,
  amountMonth,
  totalExpense,
  totalIncome,
}: MainGridResume) => {
  const items = [
    {
      title: 'Meu balanço',
      content: amount,
      icon: <Savings />,
    },
    {
      title: 'Balanço do mês',
      content: amountMonth,
      icon: <Savings />,
    },
    {
      title: 'Receita do mês',
      content: totalIncome,
      icon: <AddCircle />,
    },
    {
      title: 'Despesas do mês',
      content: totalExpense,
      icon: <RemoveCircle />,
    },
  ];

  return items
    .filter(({ content }) => typeof content === 'number' && content !== 0)
    .map(({ title, content, icon }) => ({
      title,
      content: currencyFormatter(content),
      icon,
    }));
};
