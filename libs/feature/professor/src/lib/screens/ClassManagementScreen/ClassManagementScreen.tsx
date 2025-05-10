import { Actions, Container } from './ClassManagementScreen.styled';
import { CourseContextProvider } from '../../contexts/CourseContext';
import { PaginatedTable } from '@monetix/shared/ui';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { columns } from './constants';
import { classRooms, rows } from './ClassManagementScreen.mock';
import { CourseForm } from '../../components/CourseForm';


export const ClassManagementScreen = () => {
  return (
    <CourseContextProvider>
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
            <Button variant="contained" color="primary">
              Adicionar novo curso
            </Button>
          }
        />
        <CourseForm
          open
        />
      </Container>
    </CourseContextProvider>
  )
}
