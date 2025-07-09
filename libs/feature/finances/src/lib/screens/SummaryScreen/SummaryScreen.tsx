import { Button, Grid2 as Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { BarChart, Box, PieChart } from '@monetix/shared/ui';
import { currencyFormatter } from '@monetix/core-utils';

import { MainGrid } from '../../containers/MainGrid';
import { useFinanceOverview } from '../../services/overview';
import { useSummary } from '../../contexts/SummaryContext';

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
            <PieChart data={mapperTransactionsValue(incomes)} type="income" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Despesas">
            <PieChart data={mapperTransactionsValue(expenses)} type="expense" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Balanço mensal">
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
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Receitas x Despesas">
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
