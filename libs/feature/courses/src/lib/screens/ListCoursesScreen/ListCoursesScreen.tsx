import { Typography } from '@mui/material';
import { Card } from '../../components/Card';
import { Container, MainGrid } from './ListCoursesScreen.styled';

export const ListCoursesScreen = () => {

  return (
    <Container>
      <Typography variant='h1'>Nossos cursos</Typography>
      <MainGrid>
        <Card />
        <Card />
        <Card />
        <Card />
      </MainGrid>
    </Container>
  )
}
