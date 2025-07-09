export const FORM_DATA = {
  income: {
    titleNew: 'Nova meta de receita',
    titleEdit: 'Editar meta de receita',
  },
  expense: {
    titleNew: 'Nova meta de despesa',
    titleEdit: 'Editar meta de despesa',
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

export const EMPTY_GOALS = {
  value: undefined,
  category: '',
};
