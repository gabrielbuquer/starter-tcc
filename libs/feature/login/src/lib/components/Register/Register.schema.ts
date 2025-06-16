import * as yup from 'yup';

import {
  BIRTHDATE_ATTRIBUTES,
  EMAIL_ATTRIBUTES,
  MATCHED_PASSWORD_ATTRIBUTES,
  NAME_ATTRIBUTES,
  PASSWORD_ATTRIBUTES,
} from './constants';

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, NAME_ATTRIBUTES.errorMessages.TOO_SHORT)
      .max(50, NAME_ATTRIBUTES.errorMessages.TOO_LONG)
      .required(NAME_ATTRIBUTES.errorMessages.REQUIRED),
    email: yup
      .string()
      .email(EMAIL_ATTRIBUTES.errorMessages.INVALID)
      .required(EMAIL_ATTRIBUTES.errorMessages.REQUIRED),
    birthDate: yup
      .date()
      .transform((_, originalValue) => {
        if (typeof originalValue === 'string') {
          const [day, month, year] = originalValue.split('/');
          const date = new Date(Number(year), Number(month) - 1, Number(day));
          return date;
        }
        return originalValue;
      })
      .required(BIRTHDATE_ATTRIBUTES.errorMessages.REQUIRED)
      .max(new Date(), BIRTHDATE_ATTRIBUTES.errorMessages.INVALID)
      .typeError(BIRTHDATE_ATTRIBUTES.errorMessages.INVALID),
    password: yup
      .string()
      .min(8, PASSWORD_ATTRIBUTES.errorMessages.INVALID)
      .required(PASSWORD_ATTRIBUTES.errorMessages.REQUIRED),
    matchedPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        MATCHED_PASSWORD_ATTRIBUTES.errorMessages.INVALID,
      )
      .required(MATCHED_PASSWORD_ATTRIBUTES.errorMessages.REQUIRED),
  })
  .required();
