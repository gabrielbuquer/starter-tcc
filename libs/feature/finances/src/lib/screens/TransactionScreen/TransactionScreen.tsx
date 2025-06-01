import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { MonthSelector, PaginatedTable } from '@monetix/shared/ui';
import { TransactionTypeEnum } from '@monetix/shared/config';

import { MainGrid } from '../../containers/MainGrid';
import { useTransactionTable } from '../../contexts';

import { Container, Content, Filters } from './TransactionScreen.styled';
import { columns, transactionsFilter } from './constants';
import { rows } from './TransactionScreen.content';

export const TransactionScreen = () => {
  const {
    transactions,
    transactionsPage,
    selectedType,
    isLoadingTransactions,
    setSelectedType,
    setTransactionsPage,
    setTransactionsMonth,
  } = useTransactionTable();

  return (
    <Container>
      <MainGrid {...transactions?.resume} />
      <Content>
        <Filters>
          <MonthSelector onChange={(e) => setTransactionsMonth(e)} />
          <FormControl sx={{ minWidth: 140 }} size="small">
            <InputLabel id="transaction-select-label">Transações</InputLabel>
            <Select
              label={'Tipo de transação'}
              labelId="transaction-select-label"
              defaultValue={selectedType ?? transactionsFilter[0].value}
              onChange={(e) =>
                setSelectedType(e.target.value as TransactionTypeEnum)
              }
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
          rows={rows(transactions?.items || [])}
          page={transactionsPage}
          totalRows={transactions?.meta?.totalItems}
          rowsPerPage={10}
          loading={isLoadingTransactions}
          onChangePage={(page) => setTransactionsPage(page)}
        />
      </Content>
    </Container>
  );
};
