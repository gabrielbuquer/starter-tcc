import { Controller, Resolver, useFieldArray, useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2 as Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

import { ActionDialog } from '@monetix/shared/ui';
import { BaseLessonType } from '@monetix/shared/config';

import { Actions } from './LessonForm.styled';
import {
  DEFAULT_VALUES,
  NAME_ATTRIBUTES,
  TITLE_MODAL,
  TYPE_ATTRIBUTES,
  URL_ATTRIBUTES,
} from './constants';
import { schema } from './LessonForm.schema';

export type LessonFormData = BaseLessonType;

export type LessonFormProps = {
  open: boolean;
  defaultValues?: LessonFormData | object;
  onSubmit?: (data: LessonFormData) => void;
  onClose?: () => void;
};

export const LessonForm = ({
  open = true,
  defaultValues,
  onSubmit,
  onClose,
}: LessonFormProps) => {
  const methods = useForm<LessonFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultValues ?? DEFAULT_VALUES,
    resolver: yupResolver(schema) as Resolver<LessonFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
  } = methods;

  useEffect(() => {
    reset(defaultValues ?? DEFAULT_VALUES);
  }, [defaultValues, reset]);

  const internalSubmit = async (formData: LessonFormData) => {
    onSubmit?.(formData);
    reset();
  };

  return (
    <ActionDialog open={open} title={TITLE_MODAL} onClose={onClose} isDraggable>
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
            label={URL_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.url}
            helperText={errors.url?.message}
            {...register('url')}
          />

          <FormControl error={!!errors.type}>
            <FormLabel id="lesson-type-radio-group-label">
              Tipo da lição
            </FormLabel>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Selecione um tipo de lição' }}
              render={({ field }) => (
                <RadioGroup
                  row
                  aria-labelledby="lesson-type-radio-group-label"
                  value={field.value}
                  onChange={field.onChange}
                >
                  {TYPE_ATTRIBUTES.options.map((lesson) => (
                    <FormControlLabel
                      key={lesson.value}
                      value={lesson.value}
                      control={<Radio />}
                      label={lesson.label}
                    />
                  ))}
                </RadioGroup>
              )}
            />
            {errors.type && (
              <Typography color="error" variant="caption">
                {errors.type.message as string}
              </Typography>
            )}
          </FormControl>
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
    </ActionDialog>
  );
};
