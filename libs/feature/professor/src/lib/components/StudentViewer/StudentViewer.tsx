import { Grid2 as Grid, TextField, Typography } from '@mui/material';

import { ActionDialog, CollapsibleTable, Loader } from '@monetix/shared/ui';

import { useStudentManagement } from '../../contexts/StudentManagementContext';
import { useStudent } from '../../services';

import {
  COLUMNS,
  EMAIL_ATTRIBUTES,
  NAME_ATTRIBUTES,
  TITLE_STUDENT,
} from './constants';
import { CourseTable } from './StudentViewer.styled';
import { rows } from './StudentViewer.content';

export const StudentViewer = () => {
  const { studentView, setStudentView } = useStudentManagement();
  const { data: student, isLoading } = useStudent(
    studentView?.student?.id || null,
  );

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
            value={studentView?.student?.name || 'Nome do Estudante'}
            disabled
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label={EMAIL_ATTRIBUTES.label}
            variant="outlined"
            value={studentView?.student?.email || 'estudante@email.com'}
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
          rows={rows(student?.courses || [])}
          page={1}
          rowsPerPage={5}
        />
        {isLoading && <Loader isFullScreen={false} />}
      </CourseTable>
    </ActionDialog>
  );
};
