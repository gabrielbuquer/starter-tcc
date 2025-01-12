import { Resolver, useForm } from 'react-hook-form';
import { Button, TextField } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from "./Register.styled";
import { PasswordInput } from "@monetix/shared/ui";
import { schema } from './Register.schema';
import { BIRTHDATE_ATTRIBUTES, EMAIL_ATTRIBUTES, MATCHED_PASSWORD_ATTRIBUTES, NAME_ATTRIBUTES, PASSWORD_ATTRIBUTES } from './constants';

type RegisterProps = {
  onBack: () => void;
}

type RegisterFormData = {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  matchedPassword: string;
}

export const Register = ({ onBack }: RegisterProps) => {
  const methods = useForm<RegisterFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema) as Resolver<RegisterFormData>,
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = methods;

  const onSubmit = async (formData: RegisterFormData) => {
    console.log(formData);
  }

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
      <TextField
        id={BIRTHDATE_ATTRIBUTES.id}
        label={BIRTHDATE_ATTRIBUTES.label}
        variant="outlined"
        error={!!errors.birthDate}
        helperText={errors.birthDate?.message}
        {...register('birthDate')}
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
      <Button variant="contained" sx={{ bgcolor: 'primary.light' }} onClick={() => onBack()}>
        Voltar
      </Button>
    </Form>
  )
};
