import { Controller, Resolver, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';

import { PasswordInput, showSnackBar } from '@monetix/shared/ui';

import { authSignUp } from '../../services';

import { Form } from './Register.styled';
import { schema } from './Register.schema';
import {
  BIRTHDATE_ATTRIBUTES,
  EMAIL_ATTRIBUTES,
  MATCHED_PASSWORD_ATTRIBUTES,
  NAME_ATTRIBUTES,
  PASSWORD_ATTRIBUTES,
} from './constants';

type RegisterProps = {
  onBack: () => void;
};

type RegisterFormData = {
  name: string;
  email: string;
  birthDate: Date | string;
  password: string;
  matchedPassword: string;
};

export const Register = ({ onBack }: RegisterProps) => {
  const methods = useForm<RegisterFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema) as Resolver<RegisterFormData>,
  });

  const {
    control,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = methods;

  const onSubmit = async (formData: RegisterFormData) => {
    console.log(formData);

    try {
      await authSignUp({
        name: formData.name,
        email: formData.email,
        birthDate: formData.birthDate as string,
        password: formData.password,
      });
      showSnackBar({
        message: 'Usuário cadastrado com sucesso. Faça o login.',
        type: 'success',
      });
      onBack();
    } catch (error) {
      console.error('Error during registration:', error);
      showSnackBar({
        message: 'Erro ao cadastrar usuário. Tente novamente.',
        type: 'error',
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id={NAME_ATTRIBUTES.id}
        label={NAME_ATTRIBUTES.label}
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register('name')}
      />
      <TextField
        id={EMAIL_ATTRIBUTES.id}
        label={EMAIL_ATTRIBUTES.label}
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <Controller
        name="birthDate"
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
                label={BIRTHDATE_ATTRIBUTES.label}
                variant="outlined"
                error={!!errors.birthDate}
                helperText={errors.birthDate?.message}
              />
            )}
          </InputMask>
        )}
      />
      <PasswordInput
        id={PASSWORD_ATTRIBUTES.id}
        label={PASSWORD_ATTRIBUTES.label}
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password')}
      />
      <PasswordInput
        id={MATCHED_PASSWORD_ATTRIBUTES.id}
        label={MATCHED_PASSWORD_ATTRIBUTES.label}
        variant="outlined"
        error={!!errors.matchedPassword}
        helperText={errors.matchedPassword?.message}
        {...register('matchedPassword')}
      />
      <Button type="submit" variant="contained" disabled={!isValid}>
        Entrar
      </Button>
      <Button
        variant="contained"
        sx={{ bgcolor: 'primary.light' }}
        onClick={() => onBack()}
      >
        Voltar
      </Button>
    </Form>
  );
};
