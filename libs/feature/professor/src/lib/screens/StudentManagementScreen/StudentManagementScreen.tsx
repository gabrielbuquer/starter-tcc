import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { Loader, PaginatedTable } from '@monetix/shared/ui';

import { useStudentManagement } from '../../contexts/StudentManagementContext';
import { StudentViewer } from '../../components';
import { useClassRoomForm } from '../../hooks/useClassroomForm';
import { ClassRoomForm } from '../../components/ClassRoomForm';

import { Actions, Container } from './StudentManagementScreen.styled';
import { columns } from './constants';
import { rows } from './StudentManagementScreen.content';

export const StudentManagementScreen = () => {
  const {
    classRooms,
    classRoomStudents,
    isLoadingClasses,
    isLoadingStudents,
    setSelectedClassRoom,
    setClassRoomStudentsPage,
    classRoomStudentsPage,
  } = useStudentManagement();

  const { classRoomForm, openClassRoomForm, closeClassRoomForm } =
    useClassRoomForm();

  if (isLoadingClasses) {
    return <Loader />;
  }

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Gestão de Alunos
      </Typography>
      <Actions>
        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel id="transaction-select-label">Classe</InputLabel>
          <Select
            label={'Tipo de transação'}
            labelId="transaction-select-label"
            defaultValue={classRooms?.[0].id}
            onChange={(e) => {
              setSelectedClassRoom(e.target.value);
            }}
          >
            {classRooms?.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => openClassRoomForm()}
        >
          Adicionar nova classe
        </Button>
      </Actions>
      <PaginatedTable
        columns={columns}
        rows={rows(classRoomStudents?.items ?? [])}
        page={classRoomStudentsPage}
        rowsPerPage={10}
        totalRows={classRoomStudents?.meta?.totalItems ?? 0}
        onChangePage={(newPage) => setClassRoomStudentsPage(newPage)}
        loading={isLoadingStudents}
      />
      <StudentViewer />
      <ClassRoomForm
        open={classRoomForm.open}
        defaultValues={classRoomForm.defaultValues}
        onClose={closeClassRoomForm}
      />
    </Container>
  );
};
