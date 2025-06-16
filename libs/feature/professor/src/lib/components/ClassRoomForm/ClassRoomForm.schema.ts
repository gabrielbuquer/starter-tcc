import * as yup from 'yup';

import { NAME_ATTRIBUTES } from './constants';

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, NAME_ATTRIBUTES.errorMessages.TOO_SHORT)
      .max(50, NAME_ATTRIBUTES.errorMessages.TOO_LONG)
      .required(NAME_ATTRIBUTES.errorMessages.REQUIRED),
  })
  .required();
