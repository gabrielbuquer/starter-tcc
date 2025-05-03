import { Container, MainGrid } from './CourseScreen.styled';
import { StepList } from '../../components/StepList';
import { MOCK_LESSONS } from '../../components/StepList/StepList.mock';
import { Content } from '../../components/Content';


export const CourseScreen = () => {
  return (
    <Container>
      <MainGrid>
        <Content />
        <StepList lessons={MOCK_LESSONS} />
      </MainGrid>
    </Container>
  )
}
