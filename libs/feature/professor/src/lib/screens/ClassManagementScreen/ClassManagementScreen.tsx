import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { PaginatedTable } from '@monetix/shared/ui';

import { useClassManagement } from '../../contexts';

import { Actions, Container } from './ClassManagementScreen.styled';
import { columns } from './constants';
import { rows } from './ClassManagementScreen.content';

export const ClassManagementScreen = () => {
  const {
    classRooms,
    classRoomCourses,
    isLoading,
    setModalCourseOpen,
    setSelectedClassRoom,
  } = useClassManagement();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Gestão de Aula
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
      {classRoomCourses?.items?.length > 0 && (
        <PaginatedTable
          columns={columns}
          rows={rows(classRoomCourses?.items)}
          page={0}
          rowsPerPage={10}
          actions={
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalCourseOpen({ open: true })}
            >
              Adicionar novo curso
            </Button>
          }
        />
      )}
    </Container>
  );
};
