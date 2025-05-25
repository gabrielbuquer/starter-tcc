export const TITLE_MODAL = 'Nova lição';

export const DEFAULT_VALUES = {
  name: '',
  url: '',
  type: 'video',
};

export const NAME_ATTRIBUTES = {
  id: 'name',
  placeholder: 'Nome',
  label: 'Nome',
  controlHint: 'name-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'O nome é obrigatório.',
    INVALID: 'Informe um nome válido.',
    TOO_SHORT: 'O nome deve ter no mínimo 2 caracteres.',
    TOO_LONG: 'O nome deve ter no máximo 50 caracteres.',
  },
};

export const URL_ATTRIBUTES = {
  id: 'url',
  placeholder: 'URL',
  label: 'URL',
  controlHint: 'url-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'A URL é obrigatório.',
    INVALID: 'Informe uma URL válida.',
    TOO_SHORT: 'A URL deve ter no mínimo 2 caracteres.',
    TOO_LONG: 'A URL deve ter no máximo 50 caracteres.',
  },
};

export const TYPE_ATTRIBUTES = {
  id: 'type',
  label: 'Tipo',
  controlHint: 'type-hint',
  options: [
    { value: 'video', label: 'Vídeo' },
    { value: 'form', label: 'Form' },
    { value: 'pdf', label: 'PDF' },
  ],
  errorMessages: {
    REQUIRED: 'Selecione uma opção.',
    INVALID: 'Selecione uma opção válida.',
  },
};
