import { Controller, Resolver, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import {
  Button,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

import { ActionDialog } from '@monetix/shared/ui';
import { TransactionTypeEnum } from '@monetix/shared/config';

import { useTransactionCategories } from '../../services/transactions';
import { useTransaction } from '../../hooks/useTransaction';

import { Actions } from './TransactionForm.styled';
import {
  CATEGORY_ATTRIBUTES,
  DATE_ATTRIBUTES,
  DESCRIPTION_ATTRIBUTES,
  EMPTY_TRANSACTION,
  FORM_DATA,
  VALUE_ATTRIBUTES,
} from './constants';
import { schema } from './TransactionForm.schema';

type TransactionFormData = {
  description: string;
  value: number;
  date: Date;
  category: string;
};

export type TransactionFormProps = {
  open: boolean;
  formType: TransactionTypeEnum;
  isEditing?: boolean;
  defaultValues?: TransactionFormData;
  onClose?: () => void;
};

export const TransactionForm = ({
  open = true,
  isEditing = false,
  defaultValues,
  formType,
  onClose,
}: TransactionFormProps) => {
  const { titleNew, titleEdit } = FORM_DATA[formType];
  const { postTransaction, updateTransaction } = useTransaction();
  const { data: categories } = useTransactionCategories(formType);
  const [loading, setLoading] = useState(false);

  const methods = useForm<TransactionFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema) as Resolver<TransactionFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = methods;

  const onSubmit = async (formData: TransactionFormData) => {
    setLoading(true);
    const transactionHandler = isEditing ? updateTransaction : postTransaction;
    await transactionHandler({
      ...formData,
      categoryId: formData.category,
      date: new Date(formData.date).toISOString(),
      type: formType,
    });
    setLoading(false);
    onClose?.();
  };

  useEffect(() => {
    if (open) {
      reset(defaultValues ?? EMPTY_TRANSACTION);
    }
  }, [defaultValues, open, reset]);

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
            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <InputMask
                  mask="99/99/9999"
                  value={
                    value instanceof Date
                      ? value.toLocaleDateString('pt-BR')
                      : value ?? ''
                  }
                  onChange={(e) => onChange(e.target.value)}
                  onBlur={onBlur}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      fullWidth
                      label={DATE_ATTRIBUTES.label}
                      variant="outlined"
                      error={!!errors.date}
                      helperText={errors.date?.message}
                    />
                  )}
                </InputMask>
              )}
            />
          </Grid>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Categoria</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label={CATEGORY_ATTRIBUTES.label}
              defaultValue={defaultValues?.category || ''}
              {...register('category')}
            >
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Actions>
          <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            disabled={!isValid}
            loading={loading}
          >
            Salvar
          </LoadingButton>
          <Button fullWidth variant="outlined" type="submit" onClick={onClose}>
            Cancelar
          </Button>
        </Actions>
      </form>
    </ActionDialog>
  );
};
