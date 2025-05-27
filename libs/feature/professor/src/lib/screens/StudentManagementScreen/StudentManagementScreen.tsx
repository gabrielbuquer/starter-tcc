import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { PaginatedTable } from '@monetix/shared/ui';

import {
  StudentManagementContextProvider,
  useStudentManagement,
} from '../../contexts/StudentManagementContext';
import { StudentViewer } from '../../components';

import { Actions, Container } from './StudentManagementScreen.styled';
import { columns } from './constants';
import { rows } from './StudentManagementScreen.content';

export const StudentManagementScreen = () => {
  const { classRooms, classRoomStudents, isLoading, setSelectedClassRoom } =
    useStudentManagement();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StudentManagementContextProvider>
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
          <Button variant="contained" color="primary">
            Adicionar nova classe
          </Button>
        </Actions>
        <PaginatedTable
          columns={columns}
          rows={rows(classRoomStudents?.items ?? [])}
          page={0}
          rowsPerPage={10}
        />

        <StudentViewer />
      </Container>
    </StudentManagementContextProvider>
  );
};
