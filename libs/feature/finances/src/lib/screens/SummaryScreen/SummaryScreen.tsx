import { Button, Grid2 as Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { BarChart, Box, PieChart } from '@monetix/shared/ui';
import { currencyFormatter } from '@monetix/core-utils';

import { MainGrid } from '../../containers/MainGrid';
import { useSummary } from '../../contexts/SummaryContext';
import { EmptyState } from '../../components/EmptyState';

import { Container } from './SummaryScreen.styled';
import {
  mapperBalances,
  mapperTotals,
  mapperTransactionsValue,
} from './SummaryScreen.content';

export const desktopOS = [
  {
    label: 'Salário',
    value: 1500.0,
  },
  {
    label: 'Prémios',
    value: 200.0,
  },
  {
    label: 'Empréstimos',
    value: 1000.0,
  },
];

export const SummaryScreen = () => {
  const { push } = useRouter();
  const {
    amount,
    amountMonth,
    incomeMonth,
    expenseMonth,
    incomes,
    expenses,
    totals,
    balances,
  } = useSummary();

  const graphBalances = useMemo(
    () => mapperBalances(balances ?? []),
    [balances],
  );
  const graphTotals = useMemo(() => mapperTotals(totals ?? []), [totals]);
  return (
    <Container>
      <MainGrid
        resume={{
          amount,
          amountMonth,
          totalExpense: expenseMonth,
          totalIncome: incomeMonth,
        }}
        reportOption={false}
      />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Receitas">
            {incomes && incomes.length > 0 ? (
              <PieChart data={mapperTransactionsValue(incomes)} type="income" />
            ) : (
              <EmptyState message="Sem dados de receitas para exibir" />
            )}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Despesas">
            {expenses && expenses.length > 0 ? (
              <PieChart
                data={mapperTransactionsValue(expenses)}
                type="expense"
              />
            ) : (
              <EmptyState message="Sem dados de despesas para exibir" />
            )}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Balanço mensal">
            {graphBalances.dates && graphBalances.dates.length > 0 ? (
              <BarChart
                type="balance"
                dates={graphBalances.dates}
                series={[
                  {
                    data: graphBalances.series,
                    valueFormatter: (item) => currencyFormatter(item ?? 0),
                  },
                ]}
              />
            ) : (
              <EmptyState message="Sem dados de balanço para exibir" />
            )}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Receitas x Despesas">
            {graphTotals.dates && graphTotals.dates.length > 0 ? (
              <BarChart
                dates={graphTotals.dates}
                series={[
                  {
                    data: graphTotals.incomes,
                    valueFormatter: (item) => currencyFormatter(item ?? 0),
                  },
                  {
                    data: graphTotals.expenses,
                    valueFormatter: (item) => currencyFormatter(item ?? 0),
                  },
                ]}
              />
            ) : (
              <EmptyState message="Sem dados comparativos para exibir" />
            )}
          </Box>
        </Grid>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => push('/financas/transacoes')}
        >
          Ver as últimas transações
        </Button>
      </Grid>
    </Container>
  );
};
