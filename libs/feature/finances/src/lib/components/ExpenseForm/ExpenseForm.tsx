import { Controller, Resolver, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import { Button, FormControl, Grid2 as Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ActionDialog } from '@monetix/shared/ui';
import { Actions } from './ExpenseForm.styled';

import { CATEGORY_ATTRIBUTES, DATE_ATTRIBUTES, DESCRIPTION_ATTRIBUTES, DIALOG_TITLE, VALUE_ATTRIBUTES } from './constants';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './ExpenseForm.schema';

type ExpenseFormData = {
  description: string;
  value: string;
  date: string;
  category: string;
}

export type ExpenseFormProps = {
  open: boolean;
}

export const ExpenseForm = ({ open = true }: ExpenseFormProps) => {
  const methods = useForm<ExpenseFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema) as Resolver<ExpenseFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = methods;

  const onSubmit = async (formData: ExpenseFormData) => {
    console.log(formData);
  }

  return (
    <ActionDialog
      open={open}
      title={DIALOG_TITLE}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <TextField
            fullWidth
            label={DESCRIPTION_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register('description')}
          />
          <Grid size={6}>
            <Controller
              render={({ field: { name, onChange, onBlur, value, ref } }) => (
                <NumericFormat
                  getInputRef={ref}
                  fullWidth
                  value={value}
                  onBlur={onBlur}
                  name={name}
                  onValueChange={(value) => {
                    onChange(value.floatValue);
                  }}
                  label={VALUE_ATTRIBUTES.label}
                  variant="outlined"
                  error={!!errors.value}
                  helperText={errors.value?.message}
                  customInput={TextField}
                  prefix="R$"
                  thousandSeparator
                />
              )}
              name="value"
              control={control}
            />
          </Grid>
          <Grid size={6}>
          <InputMask
            mask="99/99/9999"
            maskChar=" "
            {...register('date')}
          >
            {
              (props) => <TextField
                {...props}
                fullWidth
                label={DATE_ATTRIBUTES.label}
                variant="outlined"
                error={!!errors.date}
                helperText={errors.date?.message}
              />
            }
          </InputMask>
          </Grid>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Categoria</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label={CATEGORY_ATTRIBUTES.label}
              {...register('category')}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Actions>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            // disabled={!isValid}
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
