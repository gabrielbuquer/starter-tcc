import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { CheckCircle } from '@mui/icons-material';

import { Box } from '@monetix/shared/ui';

import { useCourseContext } from '../../contexts/CourseContext';
import { ButtonFinish } from '../ButtonFinish';

import { Container, LessonStatus, Wrapper } from './StepList.styled';

export const StepList = () => {
  const { lessons, selectedLesson, setSelectedLesson } = useCourseContext();

  return (
    <Container>
      <Box>
        <Wrapper>
          {lessons?.map((lesson, i) => (
            <ListItemButton
              component="button"
              key={lesson.id}
              selected={selectedLesson?.id === lesson.id}
              onClick={() => setSelectedLesson(i)}
            >
              <ListItemText primary={`${i + 1} - ${lesson?.name}`} />
              <LessonStatus>
                {lesson?.endDate && <CheckCircle color="primary" />}
              </LessonStatus>
            </ListItemButton>
          ))}
        </Wrapper>
      </Box>
      <ButtonFinish />
    </Container>
  );
};
