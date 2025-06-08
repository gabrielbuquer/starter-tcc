import { useState } from 'react';
import { IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import Edit from '@mui/icons-material/Edit';

import { Box, MonthSelector, PaginatedTable } from '@monetix/shared/ui';
import { TransactionTypeEnum, a11yProps } from '@monetix/shared/config';

import { MonthTotalizers } from '../../components/MonthTotalizers';
import { useGoalsTable } from '../../contexts';

import {
  Container,
  Content,
  Controllers,
  Filter,
  MainGrid,
} from './GoalsScreen.styled';
import { columns, rows, totalizers } from './GoalsScreen.content';

const COMPONENT = 'goals';

export const GoalsScreen = () => {
  const {
    goals,
    goalsPage,
    isLoadingGoals,
    selectedType,
    setSelectedType,
    setGoalsMonth,
    setGoalsPage,
  } = useGoalsTable();

  const handleTypeChange = (
    event: React.SyntheticEvent,
    value: TransactionTypeEnum,
  ) => {
    console.log(event, value);
    setSelectedType(value);
  };

  return (
    <Container>
      <Tabs
        value={selectedType}
        onChange={handleTypeChange}
        aria-label="Selecione entre Despesas ou Receitas"
        centered
      >
        <Tab
          label="Receitas"
          value={TransactionTypeEnum.INCOME}
          {...a11yProps(COMPONENT, TransactionTypeEnum.INCOME)}
        />
        <Tab
          label="Despesas"
          value={TransactionTypeEnum.EXPENSE}
          {...a11yProps(COMPONENT, TransactionTypeEnum.EXPENSE)}
        />
      </Tabs>
      <MainGrid>
        <Controllers>
          <Box>
            <Filter>
              <MonthSelector onChange={(e) => setGoalsMonth(e)} fullWidth />
            </Filter>
          </Box>
          <MonthTotalizers
            title="Total do mês"
            totalizers={totalizers(goals?.resume)}
          />
        </Controllers>
        <Content>
          <PaginatedTable
            columns={columns}
            rows={rows(goals?.items ?? [])}
            page={goalsPage}
            totalRows={goals?.meta?.totalItems}
            rowsPerPage={10}
            loading={isLoadingGoals}
            onChangePage={(page) => setGoalsPage(page)}
            actions={
              <Tooltip title="Editar metas" placement="right">
                <IconButton
                  onClick={() => {
                    console.log('teste');
                  }}
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
  );
};
