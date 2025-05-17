import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { PaginatedTable } from '@monetix/shared/ui';
import { CourseType } from '@monetix/shared/config';

import { ClassManagementContextProvider } from '../../contexts/ClassManagementContext';
import { CourseForm } from '../../components/CourseForm';

import { Actions, Container } from './ClassManagementScreen.styled';
import { columns } from './constants';
import { classRooms, rows } from './ClassManagementScreen.mock';

type ModalCourseState = {
  open: boolean;
  course?: Partial<CourseType>;
};

export const ClassManagementScreen = () => {
  const [modalCourseOpen, setModalCourseOpen] = useState<ModalCourseState>({
    open: false,
  });

  return (
    <ClassManagementContextProvider>
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
              defaultValue={classRooms[0].id}
            >
              {classRooms.map((item) => (
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
          rows={rows}
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
        <CourseForm
          open={modalCourseOpen.open}
          isEditing={!!modalCourseOpen.course}
          defaultValues={modalCourseOpen.course}
          onClose={() => setModalCourseOpen({ open: false })}
        />
      </Container>
    </ClassManagementContextProvider>
  );
};
