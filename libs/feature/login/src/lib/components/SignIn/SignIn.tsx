import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

import { PasswordInput, showSnackBar } from '@monetix/shared/ui';

import { EMAIL_ATTRIBUTES, PASSWORD_ATTRIBUTES } from './constants';
import { Form } from './SignIn.styled';

type SignInFormData = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const res = await signIn('credentials', {
      username: formData.email,
      password: formData.password,
      redirect: false,
      callbackUrl: '/',
    });

    if (res?.ok) {
      push('/');
      showSnackBar({
        message: 'Login realizado com sucesso.',
        type: 'success',
      });
      setLoading(false);
    } else {
      setLoading(false);
      showSnackBar({
        message: 'Verifique os dados e tente novamente.',
        type: 'error',
      });
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
      <LoadingButton
        type="submit"
        variant="contained"
        disabled={!isValid}
        loading={loading}
      >
        Entrar
      </LoadingButton>
    </Form>
  );
};
