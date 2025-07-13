import { Column } from '@monetix/shared/ui';

export const columns: Column[] = [
  { id: 'enabled', label: 'Habilitado', minWidth: 50 },
  { id: 'name', label: 'Curso', minWidth: 100 },
  {
    id: 'start-date',
    label: 'Data iniciado',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'end-date',
    label: 'Data finalizado',
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
