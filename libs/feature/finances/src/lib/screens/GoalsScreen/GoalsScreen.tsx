import { useState } from 'react';
import { Container, Content, Controllers, MainGrid } from './GoalsScreen.styled';
import { IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import { Box, PaginatedTable } from '@monetix/shared/ui';
import { rows, totalizers } from './GoalsScreen.mock';
import { a11yProps } from '@monetix/shared/config';
import { MonthTotalizers } from '../../components/MonthTotalizers';
import Edit from '@mui/icons-material/Edit';

const COMPONENT = 'goals';

const columns: any[] = [
  { id: 'expense', label: 'Despesas', minWidth: 170 },
  { id: 'goal', label: 'Meta', minWidth: 100 },
  {
    id: 'spended',
    label: 'Realizado',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'remained',
    label: 'A realizar',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'result',
    label: 'Excendente',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

export const GoalsScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} aria-label="Selecione entre Despesas ou Receitas" centered>
        <Tab label="Despesas" {...a11yProps(COMPONENT, 'expenses')} />
        <Tab label="Receitas" {...a11yProps(COMPONENT, 'income')} />
      </Tabs>
      <MainGrid>
        <Controllers>
          <Box>
            Controle Data
          </Box>
          <MonthTotalizers title="Total do mês" totalizers={totalizers} />
        </Controllers>
        <Content>
          <PaginatedTable
            columns={columns}
            rows={rows}
            page={0}
            rowsPerPage={10}
            actions={
              <Tooltip title="Editar metas" placement="right">
                <IconButton
                  onClick={() => {console.log('teste')}}
                  size="medium"
                  aria-label={'Editar metas'}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
            }
          />
        </Content>
      </MainGrid>
    </Container>
  )
}
