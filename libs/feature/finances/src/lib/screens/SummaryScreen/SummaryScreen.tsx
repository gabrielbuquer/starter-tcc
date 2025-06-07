import { Button, Grid2 as Grid } from '@mui/material';
import { useRouter } from 'next/router';

import { BarChart, Box, PieChart } from '@monetix/shared/ui';

import { MainGrid } from '../../containers/MainGrid';
import { useFinanceOverview } from '../../services/overview';

import { Container } from './SummaryScreen.styled';
import { mapperTransactionsValue } from './SummaryScreen.content';

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
  const { data } = useFinanceOverview();
  const amount = data?.amount ?? 0;
  const expenseMonth = data?.expenseMonth ?? 0;
  const incomeMonth = data?.incomeMonth ?? 0;
  const incomes = data?.incomes ?? [];
  const expenses = data?.expenses ?? [];
  return (
    <Container>
      <MainGrid
        resume={{
          amount,
          totalExpense: expenseMonth,
          totalIncome: incomeMonth,
        }}
        reportOption={false}
      />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Receitas">
            <PieChart
              data={mapperTransactionsValue([
                ...expenses,
                ...expenses,
                ...expenses,
                ...expenses,
              ])}
              type="income"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Despesas">
            <PieChart
              data={mapperTransactionsValue([
                ...expenses,
                ...expenses,
                ...expenses,
                ...expenses,
              ])}
              type="expense"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Balanço mensal">
            <BarChart
              type="balance"
              series={[
                {
                  data: [230.02, 120.99, 24, -34, 100, -50],
                  valueFormatter: (item) => `R$ ${item?.toFixed(2)}`,
                },
              ]}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box title="Receitas x Despesas">
            <BarChart
              series={[
                {
                  data: [1230.0, 1250.0, 1330.0, 1800.0, 200, 2000],
                  valueFormatter: (item) => `R$ ${item?.toFixed(2)}`,
                },
                {
                  data: [1000, 800.99, 1200, 2500, 700, 1000],
                  valueFormatter: (item) => `R$ ${item?.toFixed(2)}`,
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
