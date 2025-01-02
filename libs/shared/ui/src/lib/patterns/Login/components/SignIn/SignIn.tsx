import { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from 'react-hook-form';
import { EMAIL_ATTRIBUTES } from "./constants";
import { Form } from "./SignIn.styled";

type SignInFormData = {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
  }

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
      <TextField
        id="password"
        label="Senha"
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password', {
          required: {
            value: true,
            message: EMAIL_ATTRIBUTES.errorMessages.REQUIRED,
          },
        })}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button type="submit" variant="contained" disabled={!isValid}>
        Entrar
      </Button>
    </Form>
  )
};
