import { Loader } from '@monetix/shared/ui';

import { StepList } from '../../components/StepList';
import { Content } from '../../components/Content';
import { useCourseContext } from '../../contexts/CourseContext';

import { Container, MainGrid } from './CourseScreen.styled';

export const CourseScreen = () => {
  const { isLoading } = useCourseContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <MainGrid>
        <Content />
        <StepList />
      </MainGrid>
    </Container>
  );
};
