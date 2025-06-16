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
  { id: 'name', label: 'Curso', minWidth: 290 },
  {
    id: 'startDate',
    label: 'Data de início',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'endDate',
    label: 'Data de término',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'progress',
    label: 'Progresso',
    minWidth: 100,
    align: 'center',
  },
];

export const LESSON_COLUMNS: Column[] = [
  { id: 'name', label: 'Curso', minWidth: 250 },
  {
    id: 'startDate',
    label: 'Data de início',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'endDate',
    label: 'Data de término',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'progress',
    label: 'Progresso',
    minWidth: 100,
    align: 'center',
  },
];
