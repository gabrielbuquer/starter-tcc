import { Resolver, useFieldArray, useForm } from 'react-hook-form';
import { Button, Grid2 as Grid, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';

import {
  ActionDialog,
  Loader,
  SortableList,
  showSnackBar,
} from '@monetix/shared/ui';
import { BaseCourseType, BaseLessonType } from '@monetix/shared/config';

import { LessonForm, LessonFormData } from '../LessonForm';
import { useCourse, usePostCourse } from '../../services/courses';

import { Actions, LessonsBox, LessonsHeader } from './CourseForm.styled';
import {
  DESCRIPTION_ATTRIBUTES,
  EMPTY_COURSE,
  FORM_DATA,
  LESSON_ATTRIBUTES,
  NAME_ATTRIBUTES,
} from './constants';
import { schema } from './CourseForm.schema';
import { SortableLesson } from './components/SortableLesson';

type ModalLessonState = {
  open: boolean;
  lesson?: BaseLessonType;
};

type CourseFormData = BaseCourseType;

export type CourseFormProps = {
  open: boolean;
  isEditing?: boolean;
  defaultValues?: Partial<CourseFormData>;
  onClose?: () => void;
  onSubmit?: () => void;
};

export const CourseForm = ({
  open = true,
  defaultValues,
  isEditing,
  onClose,
  onSubmit,
}: CourseFormProps) => {
  const { titleNew, titleEdit } = FORM_DATA;
  const { data: defaultCourse, isLoading: loadingDefaultCourse } = useCourse(
    isEditing ? defaultValues?.id : null,
  );
  const [modalLessonOpen, setModalLessonOpen] = useState<ModalLessonState>({
    open: false,
  });

  const { trigger: postCourse } = usePostCourse();

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
    reset,
  } = methods;

  const { fields, move, append, remove, update } = useFieldArray({
    control,
    name: 'lessons',
  });

  const handleNewLesson = async (formData: LessonFormData) => {
    if (modalLessonOpen.lesson) {
      const index = fields.findIndex(
        (item) => item.id === modalLessonOpen.lesson?.id,
      );
      update(index, formData);
    } else {
      append(formData);
    }
    setModalLessonOpen({ open: false });
  };

  const internalSubmit = async (formData: CourseFormData) => {
    try {
      await postCourse(formData);
      showSnackBar({
        message: `Curso ${formData.name} criado com sucesso!`,
        type: 'success',
      });
      onSubmit?.();
    } catch (error) {
      showSnackBar({
        message: `Erro ao criar curso ${formData.name}. Verifique os dados e tente novamente.`,
        type: 'error',
      });
    }

    onClose?.();
  };

  useEffect(() => {
    console.log(
      'CourseForm useEffect defaultCourse',
      defaultValues,
      defaultCourse,
    );
    if (open && !loadingDefaultCourse) {
      reset(defaultCourse ?? EMPTY_COURSE);
    }
  }, [defaultCourse, open, reset]);

  if (loadingDefaultCourse) {
    return <Loader />;
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

              <Button
                variant="contained"
                color="primary"
                onClick={() => setModalLessonOpen({ open: true })}
              >
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
                    onEdit={() =>
                      setModalLessonOpen({ open: true, lesson: item })
                    }
                    onDelete={() => remove(index)}
                  />
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
          <Button fullWidth variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
        </Actions>
      </form>
      <LessonForm
        open={modalLessonOpen.open}
        defaultValues={modalLessonOpen.lesson}
        onSubmit={handleNewLesson}
        onClose={() => setModalLessonOpen({ open: false })}
      />
    </ActionDialog>
  );
};
