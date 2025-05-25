import * as yup from 'yup';

import { schema as lessonSchema } from '../LessonForm/LessonForm.schema';

import {
  DESCRIPTION_ATTRIBUTES,
  LESSON_ATTRIBUTES,
  NAME_ATTRIBUTES,
} from './constants';

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, NAME_ATTRIBUTES.errorMessages.TOO_SHORT)
      .max(50, NAME_ATTRIBUTES.errorMessages.TOO_LONG)
      .required(NAME_ATTRIBUTES.errorMessages.REQUIRED),
    description: yup
      .string()
      .min(2, DESCRIPTION_ATTRIBUTES.errorMessages.TOO_SHORT)
      .max(50, DESCRIPTION_ATTRIBUTES.errorMessages.TOO_LONG)
      .required(DESCRIPTION_ATTRIBUTES.errorMessages.REQUIRED),
    lessons: yup
      .array()
      .min(1, LESSON_ATTRIBUTES.errorMessages.MIN_ITEMS)
      .of(lessonSchema)
      .required(LESSON_ATTRIBUTES.errorMessages.REQUIRED),
  })
  .required();
