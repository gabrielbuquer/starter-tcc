export const NAME_ATTRIBUTES = {
  id: 'name',
  placeholder: 'Digite seu nome',
  label: 'Nome',
  controlHint: 'name-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'O nome é obrigatório.',
    INVALID: 'Informe seu nome.',
    TOO_SHORT: 'O nome deve ter no mínimo 2 caracteres.',
    TOO_LONG: 'O nome deve ter no máximo 50 caracteres.',
  },
};

export const EMAIL_ATTRIBUTES = {
  id: 'email',
  placeholder: 'Digite seu email',
  label: 'Email',
  controlHint: 'email-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'O email é obrigatório.',
    INVALID: 'Informe o seu email.'
  },
};

export const BIRTHDATE_ATTRIBUTES = {
  id: 'birthDate',
  placeholder: 'Digite sua data de nascimento',
  label: 'Data de nascimento',
  controlHint: 'birthdate-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'A data de nascimento é obrigatória.',
    INVALID: 'Informe o sua data de nascimento.'
  },
};

export const PASSWORD_ATTRIBUTES = {
  id: 'password',
  placeholder: 'Digite sua senha',
  label: 'Senha',
  controlHint: 'password-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'O campo senha é obrigatório.',
    INVALID: 'Sua senha deve ter no mínimo 8 caracteres.'
  },
};

export const MATCHED_PASSWORD_ATTRIBUTES = {
  id: 'matchedPassword',
  placeholder: 'Digite sua senha novamente',
  label: 'Confirmar senha',
  controlHint: 'matched-password-hint',
  type: 'text',
  errorMessages: {
    REQUIRED: 'O campo confirmar senha é obrigatório.',
    INVALID: 'As senhas não são iguais.'
  },
};

