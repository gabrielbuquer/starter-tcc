import * as yup from 'yup';
import { CATEGORY_ATTRIBUTES, DATE_ATTRIBUTES, DESCRIPTION_ATTRIBUTES, VALUE_ATTRIBUTES } from './constants';

export const schema = yup.object().shape({
  description: yup.string()
    .min(2, DESCRIPTION_ATTRIBUTES.errorMessages.TOO_SHORT)
    .max(50, DESCRIPTION_ATTRIBUTES.errorMessages.TOO_LONG)
    .required(DESCRIPTION_ATTRIBUTES.errorMessages.REQUIRED),
  value: yup.number()
    .moreThan(0, VALUE_ATTRIBUTES.errorMessages.MUST_BE_GREATER_THAN_ZERO)
    .required(VALUE_ATTRIBUTES.errorMessages.REQUIRED)
    .typeError(VALUE_ATTRIBUTES.errorMessages.INVALID),
  date: yup.date()
    .required(DATE_ATTRIBUTES.errorMessages.REQUIRED)
    .max(new Date(), DATE_ATTRIBUTES.errorMessages.INVALID)
    .typeError(DATE_ATTRIBUTES.errorMessages.INVALID),
  category: yup.string()
    .required(CATEGORY_ATTRIBUTES.errorMessages.REQUIRED),
}).required();



