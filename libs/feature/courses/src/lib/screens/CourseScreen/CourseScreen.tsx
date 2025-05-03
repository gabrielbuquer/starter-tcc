import { Box } from '@monetix/shared/ui';
import { Container, MainGrid } from './CourseScreen.styled';
import { StepList } from '../../components/StepList';
import { MOCK_LESSONS } from '../../components/StepList/StepList.mock';

export const CourseScreen = () => {

  return (
    <Container>
      <MainGrid>
        <Box>
          teste
        </Box>
        <Box>
          <StepList lessons={MOCK_LESSONS} />
        </Box>
      </MainGrid>
    </Container>
  )
}
