import { Grid2 as Grid, TextField, Typography } from '@mui/material';

import { ActionDialog, CollapsibleTable } from '@monetix/shared/ui';

import { useStudentManagement } from '../../contexts/StudentManagementContext';

import {
  COLUMNS,
  EMAIL_ATTRIBUTES,
  NAME_ATTRIBUTES,
  TITLE_STUDENT,
} from './constants';
import { MOCK_COURSES } from './StudentViewer.mock';
import { CourseTable } from './StudentViewer.styled';

export const StudentViewer = () => {
  const { studentView, setStudentView } = useStudentManagement();

  const onClose = () => {
    setStudentView({ open: false });
  };

  return (
    <ActionDialog
      open={studentView.open}
      title={TITLE_STUDENT}
      onClose={onClose}
      fullWidth
    >
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            fullWidth
            label={NAME_ATTRIBUTES.label}
            variant="outlined"
            value={'Estudante'}
            disabled
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label={EMAIL_ATTRIBUTES.label}
            variant="outlined"
            value={'estudante@email.com'}
            disabled
          />
        </Grid>
      </Grid>

      <CourseTable>
        <Typography variant="h5" component="h3" mb={1.5}>
          Gestão de Aulas
        </Typography>
        <CollapsibleTable
          columns={COLUMNS}
          rows={MOCK_COURSES}
          page={1}
          rowsPerPage={5}
        />
      </CourseTable>
    </ActionDialog>
  );
};
