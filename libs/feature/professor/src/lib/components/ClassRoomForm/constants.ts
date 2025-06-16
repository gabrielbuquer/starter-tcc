export const FORM_TITLE = 'Nova sala de aula';

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
