import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Typography } from '@mui/material';

import { LessonType } from '@monetix/shared/config';

import { Card, Info } from './SortableLesson.styled';

export interface SortableLessonProps {
  lesson: Partial<LessonType>;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const SortableLesson = ({
  lesson,
  onDelete,
  onEdit,
}: SortableLessonProps) => {
  return (
    <Card>
      <Info>
        <Typography variant="body1" component="p">
          {lesson.name}
        </Typography>
        <Typography variant="body2" component="span">
          {lesson.type}
        </Typography>
      </Info>

      <IconButton onClick={() => onEdit?.(lesson.id)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onDelete(lesson.id)}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};
