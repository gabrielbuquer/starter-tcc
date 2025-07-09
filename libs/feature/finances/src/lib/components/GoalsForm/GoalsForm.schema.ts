import * as yup from 'yup';

import { CATEGORY_ATTRIBUTES, VALUE_ATTRIBUTES } from './constants';

export const schema = yup
  .object()
  .shape({
    value: yup
      .number()
      .moreThan(0, VALUE_ATTRIBUTES.errorMessages.MUST_BE_GREATER_THAN_ZERO)
      .required(VALUE_ATTRIBUTES.errorMessages.REQUIRED)
      .typeError(VALUE_ATTRIBUTES.errorMessages.INVALID),
    category: yup.string().required(CATEGORY_ATTRIBUTES.errorMessages.REQUIRED),
  })
  .required();
