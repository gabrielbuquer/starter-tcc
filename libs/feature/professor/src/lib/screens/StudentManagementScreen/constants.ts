import { Column } from '@monetix/shared/ui';

export const columns: Column[] = [
  { id: 'name', label: 'Nome', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'birthDate',
    label: 'Data de nascimento',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'actions',
    label: 'Ações',
    minWidth: 50,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];
