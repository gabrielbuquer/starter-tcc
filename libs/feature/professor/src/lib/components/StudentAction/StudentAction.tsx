import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Delete from '@mui/icons-material/Delete';

import { StudentType } from '@monetix/shared/config';

import { useStudentManagement } from '../../contexts/StudentManagementContext';

import { Container } from './StudentAction.styled';

interface StudentActionProps {
  student: StudentType;
}

export const StudentAction = ({ student }: StudentActionProps) => {
  const { setStudentView } = useStudentManagement();

  const handleVisibility = () => {
    setStudentView({ open: true, student: student });
  };

  return (
    <>
      <Container>
        <IconButton onClick={handleVisibility}>
          <VisibilityIcon />
        </IconButton>
      </Container>
    </>
  );
};
