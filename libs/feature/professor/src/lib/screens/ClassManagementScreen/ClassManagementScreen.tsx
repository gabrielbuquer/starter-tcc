import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { Loader, PaginatedTable } from '@monetix/shared/ui';

import { useClassManagement } from '../../contexts';
import { ClassRoomForm } from '../../components/ClassRoomForm';
import { useClassRoomForm } from '../../hooks/useClassroomForm';

import { Actions, Container } from './ClassManagementScreen.styled';
import { columns } from './constants';
import { rows } from './ClassManagementScreen.content';

export const ClassManagementScreen = () => {
  const {
    classRooms,
    classRoomCourses,
    isLoadingClasses,
    isLoadingCourses,
    setModalCourseOpen,
    setSelectedClassRoom,
    classRoomCoursesPage,
    setClassRoomCoursesPage,
  } = useClassManagement();

  const { classRoomForm, openClassRoomForm, closeClassRoomForm } =
    useClassRoomForm();

  if (isLoadingClasses) {
    return <Loader />;
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
        rows={rows(classRoomCourses?.items ?? [])}
        page={classRoomCoursesPage}
        totalRows={classRoomCourses?.meta?.totalItems ?? 0}
        onChangePage={(newPage) => setClassRoomCoursesPage(newPage)}
        loading={isLoadingCourses}
        rowsPerPage={10}
        actions={
          <Button
            variant="contained"
            color="primary"
            onClick={() => setModalCourseOpen({ open: true, course: null })}
          >
            Adicionar novo curso
          </Button>
        }
      />

      <ClassRoomForm
        open={classRoomForm.open}
        defaultValues={classRoomForm.defaultValues}
        onClose={closeClassRoomForm}
      />
    </Container>
  );
};
