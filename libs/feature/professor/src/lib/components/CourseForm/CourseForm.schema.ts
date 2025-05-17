import * as yup from 'yup';
import { DESCRIPTION_ATTRIBUTES, LESSON_ATTRIBUTES, NAME_ATTRIBUTES } from './constants';

export const schema = yup.object().shape({
  name: yup.string()
    .min(2, NAME_ATTRIBUTES.errorMessages.TOO_SHORT)
    .max(50, NAME_ATTRIBUTES.errorMessages.TOO_LONG)
    .required(NAME_ATTRIBUTES.errorMessages.REQUIRED),
  description: yup.string()
    .min(2, DESCRIPTION_ATTRIBUTES.errorMessages.TOO_SHORT)
    .max(50, DESCRIPTION_ATTRIBUTES.errorMessages.TOO_LONG)
    .required(DESCRIPTION_ATTRIBUTES.errorMessages.REQUIRED),
  lessons: yup.array()
    .of(
      yup.object().shape({
        id: yup.string(),
        name: yup.string()
          .min(2, LESSON_ATTRIBUTES.errorMessages.TOO_SHORT)
          .max(50, LESSON_ATTRIBUTES.errorMessages.TOO_LONG)
          .required(LESSON_ATTRIBUTES.errorMessages.REQUIRED),
      })
    )
    .min(1, LESSON_ATTRIBUTES.errorMessages.MIN_ITEMS),
}).required();



