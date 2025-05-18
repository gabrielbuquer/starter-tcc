import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import { PasswordInput } from '@monetix/shared/ui';

import { EMAIL_ATTRIBUTES, PASSWORD_ATTRIBUTES } from './constants';
import { Form } from './SignIn.styled';

type SignInFormData = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const methods = useForm<SignInFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = methods;

  const onSubmit = async (formData: SignInFormData) => {
    console.log(formData);
    const res = await signIn('credentials', {
      username: formData.email,
      password: formData.password,
      redirect: true,
      callbackUrl: '/',
    });

    if (res?.ok) {
      // redireciona para dashboard ou home
    } else {
      // mostra erro
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email', {
          required: {
            value: true,
            message: EMAIL_ATTRIBUTES.errorMessages.REQUIRED,
          },
        })}
      />
      <PasswordInput
        id={PASSWORD_ATTRIBUTES.id}
        label={PASSWORD_ATTRIBUTES.label}
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password', {
          required: {
            value: true,
            message: PASSWORD_ATTRIBUTES.errorMessages.REQUIRED,
          },
        })}
      />
      <Button type="submit" variant="contained" disabled={!isValid}>
        Entrar
      </Button>
    </Form>
  );
};
