import * as yup from 'yup';

import { NAME_ATTRIBUTES, TYPE_ATTRIBUTES, URL_ATTRIBUTES } from './constants';

export const schema = yup
  .object()
  .shape({
    id: yup.string(),
    name: yup
      .string()
      .min(2, NAME_ATTRIBUTES.errorMessages.TOO_SHORT)
      .max(50, NAME_ATTRIBUTES.errorMessages.TOO_LONG)
      .required(NAME_ATTRIBUTES.errorMessages.REQUIRED),
    url: yup
      .string()
      .min(2, URL_ATTRIBUTES.errorMessages.TOO_SHORT)
      .max(100, URL_ATTRIBUTES.errorMessages.TOO_LONG)
      .url(URL_ATTRIBUTES.errorMessages.INVALID)
      .required(URL_ATTRIBUTES.errorMessages.REQUIRED),
    type: yup
      .string()
      .oneOf(
        TYPE_ATTRIBUTES.options.map((type) => type.value),
        TYPE_ATTRIBUTES.errorMessages.INVALID,
      )
      .required(TYPE_ATTRIBUTES.errorMessages.REQUIRED),
  })
  .required();
