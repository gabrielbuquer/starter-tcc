import { Controller, Resolver, useForm } from 'react-hook-form';
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
import { useEffect, useMemo, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

import { ActionDialog } from '@monetix/shared/ui';
import { TransactionTypeEnum } from '@monetix/shared/config';

import { useTransactionCategories } from '../../services/transactions';
import { useGoal } from '../../hooks/useGoal';
import { useGoalsTable } from '../../contexts';

import { Actions } from './GoalsForm.styled';
import {
  CATEGORY_ATTRIBUTES,
  EMPTY_GOALS,
  FORM_DATA,
  VALUE_ATTRIBUTES,
} from './constants';
import { schema } from './GoalsForm.schema';

type GoalsFormData = {
  value: number;
  category: string;
};

export type GoalsFormProps = {
  open: boolean;
  formType: TransactionTypeEnum;
  isEditing?: boolean;
  defaultValues?: GoalsFormData;
  onClose?: () => void;
};

export const GoalsForm = ({
  open = true,
  isEditing = false,
  defaultValues,
  formType,
  onClose,
}: GoalsFormProps) => {
  console.log('GoalsForm', {
    open,
    isEditing,
    defaultValues,
    formType,
    onClose,
  });
  const { goals } = useGoalsTable();
  const { titleNew, titleEdit } = FORM_DATA[formType];
  const { postGoal, updateGoal } = useGoal();
  const { data: categories } = useTransactionCategories(formType);
  const [loading, setLoading] = useState(false);

  const categoriesWithoutGoals = useMemo(() => {
    if (isEditing) {
      return categories;
    }

    return categories?.filter(
      (category) =>
        !goals?.items?.some((goal) => goal.category.id === category.id),
    );
  }, [categories, goals, isEditing]);

  const methods = useForm<GoalsFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema) as Resolver<GoalsFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = methods;

  const onSubmit = async (formData: GoalsFormData) => {
    setLoading(true);
    const goalHandler = isEditing ? updateGoal : postGoal;
    await goalHandler({
      ...formData,
      categoryId: formData.category,
    });
    setLoading(false);
    onClose?.();
  };

  useEffect(() => {
    if (open) {
      reset(defaultValues ?? EMPTY_GOALS);
    }
  }, [defaultValues, open, reset]);

  return (
    <ActionDialog
      open={open}
      title={isEditing ? titleEdit : titleNew}
      onClose={onClose}
      fullWidth
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={12}>
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
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Categoria</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label={CATEGORY_ATTRIBUTES.label}
              defaultValue={defaultValues?.category || ''}
              {...register('category')}
            >
              {categoriesWithoutGoals?.map((category) => (
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
