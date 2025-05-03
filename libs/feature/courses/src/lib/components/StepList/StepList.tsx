import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "./StepList.styled";
import { LessonType } from "@monetix/shared/config";

interface StepListProps {
  lessons: Partial<LessonType>[];
}

export const StepList = ({ lessons }: StepListProps) => {
  return (
    <Container>
      {lessons.map((lesson, i) => (
        <ListItemButton component="button" key={lesson.id}>
          <ListItemText primary={`${i + 1} - ${lesson.name}`} />
        </ListItemButton>
      ))}
    </Container>
  );
}
