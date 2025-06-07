import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Box } from '@monetix/shared/ui';

import { useCourseContext } from '../../contexts/CourseContext';

import { Container } from './StepList.styled';

export const StepList = () => {
  const { lessons, selectedLesson, setSelectedLesson } = useCourseContext();
  return (
    <Box>
      <Container>
        {lessons.map((lesson, i) => (
          <ListItemButton
            component="button"
            key={lesson.id}
            selected={selectedLesson?.id === lesson.id}
            onClick={() => setSelectedLesson(i)}
          >
            <ListItemText primary={`${i + 1} - ${lesson?.name}`} />
          </ListItemButton>
        ))}
      </Container>
    </Box>
  );
};
