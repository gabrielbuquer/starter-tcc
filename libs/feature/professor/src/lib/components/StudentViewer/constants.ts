import { Column } from '@monetix/shared/ui';

export const TITLE_STUDENT = 'Visualizar Aluno';

export const NAME_ATTRIBUTES = {
  id: 'name',
  placeholder: 'Nome',
  label: 'Nome',
  controlHint: 'name-hint',
  type: 'text',
};

export const EMAIL_ATTRIBUTES = {
  id: 'email',
  placeholder: 'E-mail',
  label: 'E-mail',
  controlHint: 'email-hint',
  type: 'text',
};

export const COLUMNS: Column[] = [
  { id: 'name', label: 'Curso', minWidth: 250 },
  {
    id: 'start-date',
    label: 'Data de início',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'end-date',
    label: 'Data de término',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'progress',
    label: 'Progresso',
    minWidth: 100,
    align: 'left',
    format: (value: number) => value.toFixed(2),
  },
];

export const LESSON_COLUMNS: Column[] = [
  { id: 'name', label: 'Curso', minWidth: 250 },
  {
    id: 'start-date',
    label: 'Data de início',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'end-date',
    label: 'Data de término',
    minWidth: 200,
    align: 'left',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'progress',
    label: 'Progresso',
    minWidth: 100,
    align: 'left',
    format: (value: number) => value.toFixed(2),
  },
];
