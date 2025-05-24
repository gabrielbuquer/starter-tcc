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
import { useSession } from 'next-auth/react';

import { ActionDialog } from '@monetix/shared/ui';

import { usePostTransaction } from '../../services/transactions';

import { Actions } from './TransactionForm.styled';
import {
  CATEGORY_ATTRIBUTES,
  DATE_ATTRIBUTES,
  DESCRIPTION_ATTRIBUTES,
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
  formType: 'expense' | 'income';
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
  const { data: session } = useSession();
  const { titleNew, titleEdit } = FORM_DATA[formType];
  const { trigger: postTransaction } = usePostTransaction(session?.user?.id);

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
  } = methods;

  const onSubmit = async (formData: TransactionFormData) => {
    if (isEditing) {
      // Call the mutation to update the transaction
    } else {
      await postTransaction({
        ...formData,
        category: {
          id: formData.category,
          description: formData.category,
        },
        date: new Date(formData.date).toISOString(),
        type: formType,
      });
    }
  };

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
            <InputMask mask="99/99/9999" maskChar=" " {...register('date')}>
              {(props) => {
                return (
                  <TextField
                    {...props}
                    fullWidth
                    label={DATE_ATTRIBUTES.label}
                    variant="outlined"
                    error={!!errors.date}
                    helperText={errors.date?.message}
                  />
                );
              }}
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
          <Button fullWidth variant="outlined" type="submit">
            Cancelar
          </Button>
        </Actions>
      </form>
    </ActionDialog>
  );
};
