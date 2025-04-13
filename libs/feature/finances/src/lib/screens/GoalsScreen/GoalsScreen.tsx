import { useState } from 'react';
import { Container, Content, Controllers, MainGrid } from './GoalsScreen.styled';
import { Tab, Tabs } from '@mui/material';
import { Box, PaginatedTable } from '@monetix/shared/ui';
import { rows } from './GoalsScreen.mock';
import { a11yProps } from '@monetix/shared/config';

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
          <Box title="Total do mês">
            teste
          </Box>
        </Controllers>
        <Content>
          <PaginatedTable columns={columns} rows={rows} page={0} rowsPerPage={10} />
        </Content>
      </MainGrid>
    </Container>
  )
}
