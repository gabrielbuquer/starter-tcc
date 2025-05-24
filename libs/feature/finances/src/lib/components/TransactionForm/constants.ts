export const FORM_DATA = {
  income: {
    titleNew: 'Nova receita',
    titleEdit: 'Editar receita',
  },
  expense: {
    titleNew: 'Nova despesa',
    titleEdit: 'Editar despesa',
  },
};

export const DIALOG_TITLE = 'Nova despesa';

export const DESCRIPTION_ATTRIBUTES = {
  id: 'description',
  placeholder: 'Descrição',
  label: 'Descrição',
  controlHint: 'description-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'A descrição é obrigatória.',
    INVALID: 'Informe uma descrição válida.',
    TOO_SHORT: 'A descrição deve ter no mínimo 2 caracteres.',
    TOO_LONG: 'A descrição deve ter no máximo 50 caracteres.',
  },
};

export const VALUE_ATTRIBUTES = {
  id: 'value',
  placeholder: 'Valor',
  label: 'Valor',
  controlHint: 'value-hint',
  type: 'number',
  errorMessages: {
    REQUIRED: 'O Valor é obrigatório.',
    INVALID: 'Informe um valor válido.',
    MUST_BE_GREATER_THAN_ZERO: 'O valor deve ser maior que zero.',
  },
};

export const DATE_ATTRIBUTES = {
  id: 'date',
  placeholder: 'Data',
  label: 'Data',
  controlHint: 'date-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'A data é obrigatória.',
    INVALID: 'Informe uma data válida.',
  },
};

export const CATEGORY_ATTRIBUTES = {
  id: 'category',
  placeholder: 'Categoria',
  label: 'Categoria',
  controlHint: 'category-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'A categoria é obrigatória.',
    INVALID: 'Informe uma categoria válida.',
  },
};
