import { Resolver, useForm } from 'react-hook-form';
import { Button, Grid2 as Grid, TextField } from '@mui/material';
import { ActionDialog, SortableList } from '@monetix/shared/ui';
import { Actions } from './CourseForm.styled';

import { FORM_DATA, DESCRIPTION_ATTRIBUTES, NAME_ATTRIBUTES, LESSON_ATTRIBUTES } from './constants';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './CourseForm.schema';
import { SortableLesson } from './components/SortableLesson';
import { MOCK_LESSONS } from './CourseForm.mock';
import { useState } from 'react';

type CourseFormData = {
  description: string;
  value: number;
  date: Date;
  category: string;
}

export type CourseFormProps = {
  open: boolean;
  isEditing?: boolean;
  defaultValues?: CourseFormData | object;
  onClose?: () => void;
}

export const CourseForm = ({ open = true, defaultValues, isEditing, onClose }: CourseFormProps) => {
  const { titleNew, titleEdit } = FORM_DATA;
  const [items, setItems] = useState(MOCK_LESSONS);

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

  const onSubmit = async (formData: CourseFormData) => {
    console.log(formData);
  }

  console.log(items)

  return (
    <ActionDialog
      open={open}
      title={isEditing ? titleEdit : titleNew}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <TextField
            fullWidth
            label={NAME_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register('description')}
          />
          <TextField
            fullWidth
            label={DESCRIPTION_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register('description')}
          />
          <Grid size={8}>
            <TextField
              fullWidth
              label={LESSON_ATTRIBUTES.label}
              variant="outlined"
              error={!!errors.description}
              helperText={errors.description?.message}
              {...register('description')}
            />
          </Grid>
          <Grid size={4}>
            <Button variant="outlined" color="primary" fullWidth>
              Adicionar
            </Button>
          </Grid>
          <SortableList
            items={items}
            onChange={setItems}
            renderItem={(item) => (

              <SortableList.Item id={item.id}>
                <SortableList.DragHandle />
                <SortableLesson lesson={item} onDelete={() => console.log('delete', item.id)} />
              </SortableList.Item>
            )}
          />
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
    </ActionDialog>
  )
}
