import * as yup from 'yup';
import { NAME_ATTRIBUTES, URL_ATTRIBUTES, TYPE_ATTRIBUTES } from './constants';

export const schema = yup.object().shape({
  name: yup.string()
    .min(2, NAME_ATTRIBUTES.errorMessages.TOO_SHORT)
    .max(50, NAME_ATTRIBUTES.errorMessages.TOO_LONG)
    .required(NAME_ATTRIBUTES.errorMessages.REQUIRED),
  url: yup.string()
    .min(2, URL_ATTRIBUTES.errorMessages.TOO_SHORT)
    .max(50, URL_ATTRIBUTES.errorMessages.TOO_LONG)
    .required(URL_ATTRIBUTES.errorMessages.REQUIRED),
  type: yup.string()
    .oneOf(TYPE_ATTRIBUTES.options.map(type => type.value), TYPE_ATTRIBUTES.errorMessages.INVALID)
    .required(TYPE_ATTRIBUTES.errorMessages.REQUIRED),
}).required();



