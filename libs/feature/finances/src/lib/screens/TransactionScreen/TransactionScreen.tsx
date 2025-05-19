import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { PaginatedTable } from '@monetix/shared/ui';

import { MainGrid } from '../../containers/MainGrid';
import { FinanceContextProvider } from '../../contexts/FinanceContext/FinanceContext';

import { Container, Content, Filters } from './TransactionScreen.styled';
import { rows } from './TransactionScreen.mock';
import { columns, transactionsFilter } from './constants';

export const TransactionScreen = () => {
  return (
    <FinanceContextProvider>
      <Container>
        <MainGrid />
        <Content>
          <Filters>
            <FormControl sx={{ minWidth: 140 }} size="small">
              <InputLabel id="transaction-select-label">Transações</InputLabel>
              <Select
                label={'Tipo de transação'}
                labelId="transaction-select-label"
                defaultValue={transactionsFilter[0].value}
              >
                {transactionsFilter.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Filters>
          <PaginatedTable
            columns={columns}
            rows={rows}
            page={0}
            rowsPerPage={10}
          />
        </Content>
      </Container>
    </FinanceContextProvider>
  );
};
