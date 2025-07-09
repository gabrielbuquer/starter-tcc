import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';

import { CourseType } from '@monetix/shared/config';

import { useClassManagement } from '../../contexts';

import { Container } from './CourseAction.styled';

export const CourseAction = (course: Partial<CourseType>) => {
  const { setModalCourseOpen } = useClassManagement();

  const handleEdit = () => {
    setModalCourseOpen({ open: true, course: course });
  };

  return (
    <>
      <Container>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Container>
    </>
  );
};
