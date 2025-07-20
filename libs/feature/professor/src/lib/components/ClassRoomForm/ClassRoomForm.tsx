import { Resolver, useForm } from 'react-hook-form';
import { Button, Grid2 as Grid, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { ActionDialog, showSnackBar } from '@monetix/shared/ui';

import { usePostClassRoom } from '../../services';

import { Actions } from './ClassRoomForm.styled';
import { FORM_TITLE, NAME_ATTRIBUTES } from './constants';
import { schema } from './ClassRoomForm.schema';

export type ClassRoomFormData = {
  name: string;
};

export type ClassRoomFormProps = {
  open: boolean;
  defaultValues?: ClassRoomFormData;
  onClose?: () => void;
};

export const ClassRoomForm = ({
  open = true,
  defaultValues,
  onClose,
}: ClassRoomFormProps) => {
  const [loading, setLoading] = useState(false);

  const { trigger: postClassRoom } = usePostClassRoom();

  const methods = useForm<ClassRoomFormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema) as Resolver<ClassRoomFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = methods;

  const onSubmit = async (formData: ClassRoomFormData) => {
    setLoading(true);

    try {
      await postClassRoom(formData);
      showSnackBar({
        message: 'Sala de aula criada com sucesso',
        type: 'success',
      });
    } catch (error) {
      showSnackBar({
        message: 'Erro ao criar sala de aula',
        type: 'error',
      });
    }

    setLoading(false);
    onClose?.();
  };

  return (
    <ActionDialog
      open={open}
      title={FORM_TITLE}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <TextField
            fullWidth
            label={NAME_ATTRIBUTES.label}
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name')}
          />
        </Grid>
        <Actions>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={!isValid}
            loading={loading}
          >
            Salvar
          </Button>
          <Button fullWidth variant="outlined" type="submit" onClick={onClose}>
            Cancelar
          </Button>
        </Actions>
      </form>
    </ActionDialog>
  );
};
