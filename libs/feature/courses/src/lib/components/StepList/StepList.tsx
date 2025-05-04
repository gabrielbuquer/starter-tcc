import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "./StepList.styled";
import { LessonType } from "@monetix/shared/config";
import { Box } from "@monetix/shared/ui";
import { useCourseContext } from "../../contexts/CourseContext";

interface StepListProps {
  lessons: Partial<LessonType>[];
}

export const StepList = ({ lessons }: StepListProps) => {
  const { selectedLesson, setSelectedLesson } = useCourseContext();
  return (
    <Box>
      <Container>
        {lessons.map((lesson, i) => (
          <ListItemButton
            component="button"
            key={lesson.id}
            selected={selectedLesson.id === lesson.id}
            onClick={() => setSelectedLesson(i)}>
            <ListItemText primary={`${i + 1} - ${lesson.name}`} />
          </ListItemButton>
        ))}
      </Container>
    </Box>
  );
}
