import { Typography } from '@mui/material';
import { Container } from './Footer.styled';

export const Footer = () => {
  const date = new Date();
  return (
    <Container>
      <Typography variant='body1' align='center'>{date.getFullYear()} - Monetix. Todos os direitos reservados.</Typography>
    </Container>
  );
}
