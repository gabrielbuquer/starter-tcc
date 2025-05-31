export const transactionsFilter = [
  {
    label: 'Todas',
    value: 'all',
  },
  {
    label: 'Receitas',
    value: 'income',
  },
  {
    label: 'Despesas',
    value: 'expense',
  },
];

export const columns: any[] = [
  { id: 'status', label: 'Status', minWidth: 50 },
  { id: 'date', label: 'Data', minWidth: 100 },
  {
    id: 'description',
    label: 'Descrição',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'category',
    label: 'Categoria',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
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
    format: (value: number) => value.toFixed(2),
  },
];
