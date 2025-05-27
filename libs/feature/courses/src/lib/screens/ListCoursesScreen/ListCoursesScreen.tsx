import { Typography } from '@mui/material';

import { Card } from '../../components/Card';
import { useCourseList } from '../../services';

import { Container, MainGrid } from './ListCoursesScreen.styled';

export const ListCoursesScreen = () => {
  const { data: courses } = useCourseList();

  console.log('courses', courses);

  return (
    <Container>
      <Typography variant="h1">Nossos cursos</Typography>
      <MainGrid>
        {courses?.map((course) => <Card key={course.id} {...course} />)}
      </MainGrid>
    </Container>
  );
};
