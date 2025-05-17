import { Resolver, useForm, useFieldArray } from 'react-hook-form';
import { Button, Grid2 as Grid, TextField, Typography } from '@mui/material';
import { ActionDialog, SortableList } from '@monetix/shared/ui';
import { Actions, LessonsBox, LessonsHeader } from './CourseForm.styled';

import { FORM_DATA, DESCRIPTION_ATTRIBUTES, NAME_ATTRIBUTES, LESSON_ATTRIBUTES } from './constants';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './CourseForm.schema';
import { SortableLesson } from './components/SortableLesson';
import { LessonType } from '@monetix/shared/config';
import { LessonForm, LessonFormData } from '../LessonForm';
import { useState } from 'react';

type ModalLessonState = {
  open: boolean;
  lesson?: Partial<LessonType>;
}

type CourseFormData = {
  name: string;
  description: string;
  lessons: Partial<LessonType>[];
}

export type CourseFormProps = {
  open: boolean;
  isEditing?: boolean;
  defaultValues?: CourseFormData | object;
  onClose?: () => void;
  onSubmit?: () => void;
}

export const CourseForm = ({ open = true, defaultValues, isEditing, onClose, onSubmit }: CourseFormProps) => {
  const { titleNew, titleEdit } = FORM_DATA;
  const [modalLessonOpen, setModalLessonOpen] = useState<ModalLessonState>({ open: false });

  const methods = useForm<CourseFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema) as Resolver<CourseFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = methods;

  const { fields, move, append, remove, update } = useFieldArray({
    control,
    name: 'lessons',
  });

  const handleNewLesson = async (formData: LessonFormData) => {
    if (modalLessonOpen.lesson) {
      const index = fields.findIndex((item) => item.id === modalLessonOpen.lesson?.id);
      update(index, formData);
    } else {
      append(formData);
    }
    setModalLessonOpen({ open: false });
  }

  const internalSubmit = async (formData: CourseFormData) => {
    console.log(formData, 'formData');
    onClose?.();
  }

  return (
    <ActionDialog
      open={open}
      title={isEditing ? titleEdit : titleNew}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(internalSubmit)}>
        <Grid container spacing={2}>
          <TextField
            fullWidth
            label={NAME_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name')}
          />
          <TextField
            fullWidth
            label={DESCRIPTION_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register('description')}
          />

          <LessonsBox>
            <LessonsHeader>
              <Typography variant="h4" component="h3">
                {LESSON_ATTRIBUTES.label}
              </Typography>

              <Button variant="contained" color="primary" onClick={() =>
                setModalLessonOpen({ open: true })
              }>
                Adicionar
              </Button>
            </LessonsHeader>

            <SortableList
              items={fields}
              onChange={(newItems) => {
                const currentIds = fields.map((f) => f.id);
                const newIds = newItems.map((f) => f.id);

                for (let i = 0; i < newIds.length; i++) {
                  if (newIds[i] !== currentIds[i]) {
                    const fromIndex = currentIds.indexOf(newIds[i]);
                    const toIndex = i;
                    move(fromIndex, toIndex);
                    break;
                  }
                }
              }}
              renderItem={(item, index) => (
                <SortableList.Item id={item.id}>
                  <SortableList.DragHandle />
                  <SortableLesson
                    lesson={item}
                    onEdit={() => setModalLessonOpen({ open: true, lesson: item })}
                    onDelete={() => remove(index)} />
                </SortableList.Item>
              )}
            />
          </LessonsBox>
        </Grid>
        <Actions>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={!isValid}
          >
            Salvar
          </Button>
          <Button
            fullWidth
            variant="outlined"
            type="submit"
          >
            Cancelar
          </Button>
        </Actions>
      </form>
      <LessonForm
        open={modalLessonOpen.open}
        defaultValues={modalLessonOpen.lesson}
        onSubmit={handleNewLesson}
        onClose={() => setModalLessonOpen({ open: false })} />
    </ActionDialog>
  )
}
