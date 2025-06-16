import { TransactionTypeEnum } from '@monetix/shared/config';
import { Column } from '@monetix/shared/ui';

export const transactionsFilter = [
  {
    label: 'Todas',
    value: TransactionTypeEnum.ALL,
  },
  {
    label: 'Receitas',
    value: TransactionTypeEnum.INCOME,
  },
  {
    label: 'Despesas',
    value: TransactionTypeEnum.EXPENSE,
  },
];

export const columns: Column[] = [
  { id: 'status', label: 'Status', minWidth: 50 },
  { id: 'date', label: 'Data', minWidth: 100 },
  {
    id: 'description',
    label: 'Descrição',
    minWidth: 200,
    align: 'left',
  },
  {
    id: 'category',
    label: 'Categoria',
    minWidth: 200,
    align: 'left',
  },
  {
    id: 'value',
    label: 'Valor',
    minWidth: 100,
    align: 'left',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'actions',
    label: 'Ações',
    minWidth: 50,
    align: 'right',
  },
];
