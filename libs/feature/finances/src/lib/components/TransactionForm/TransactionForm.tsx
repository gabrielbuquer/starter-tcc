import { Controller, Resolver, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import { Button, FormControl, Grid2 as Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ActionDialog } from '@monetix/shared/ui';
import { Actions } from './TransactionForm.styled';

import { FORM_DATA, CATEGORY_ATTRIBUTES, DATE_ATTRIBUTES, DESCRIPTION_ATTRIBUTES, VALUE_ATTRIBUTES } from './constants';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './TransactionForm.schema';

type TransactionFormData = {
  description: string;
  value: number;
  date: Date;
  category: string;
}

export type TransactionFormProps = {
  open: boolean;
  formType: 'expense' | 'income';
}

export const TransactionForm = ({ open = true, formType }: TransactionFormProps) => {
  const { title } = FORM_DATA[formType];

  const methods = useForm<TransactionFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema) as Resolver<TransactionFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = methods;

  const onSubmit = async (formData: TransactionFormData) => {
    console.log(formData);
  }

  return (
    <ActionDialog
      open={open}
      title={title}
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
